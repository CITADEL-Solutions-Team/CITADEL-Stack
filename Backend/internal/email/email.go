package email

import (
	"log"
	// "net/http"
	"os"
	"strconv"
	"strings"
	"sync"
	"text/template"
	"time"

	"gopkg.in/gomail.v2"
	// "github.com/gin-gonic/gin"
)

// EmailTemplate holds email template data
type EmailTemplate struct {
	ClientName     string
	ClientEmail    string
	ClientMessage  string
	ClientPhone    string
	ClientBusiness string
	ClientService  string
	Timestamp      time.Time
}

var (
	isTesting = false // Flag to enable testing mode
	// For duplicate submission prevention
	submissionTracker = make(map[string]time.Time)
	trackerMutex      = sync.RWMutex{}
	duplicateWindow   = 5 * time.Minute // 5 minute window for duplicate submissions
)

func SetTestingMode(enabled bool) {
	isTesting = enabled
}

// IsDuplicate checks if a submission is a duplicate based on email and timestamp
func IsDuplicate(email string) bool {
	trackerMutex.RLock()
	defer trackerMutex.RUnlock()
	if lastSubmit, exists := submissionTracker[email]; exists {
		if time.Since(lastSubmit) < duplicateWindow {
			return true
		}
	}
	return false
}

// RecordSubmission records a successful submission to prevent duplicates
func RecordSubmission(email string) {
	trackerMutex.Lock()
	defer trackerMutex.Unlock()
	submissionTracker[email] = time.Now()

}

// sendEmail creates and sends the email
func SendEmail(client interface{}) error {
	if isTesting {
		log.Printf("TEST MODE: Would send email to %s", client.(map[string]interface{})["email"])
		return nil
	}

	stmpHost := os.Getenv("SMTP_HOST")
	stmpPort := os.Getenv("SMTP_PORT")
	username := os.Getenv("EMAIL_USERNAME")
	password := os.Getenv("EMAIL_PASSWORD")
	to := os.Getenv("COMPANY_EMAIL")

	// Convert string port to integer
	port, err := strconv.Atoi(stmpPort)
	if err != nil {
		log.Printf("failed to convert SMTP port: %v", err)
		return err
	}

	// Create the email using this template
	tmpl := template.Must(template.New("email").Parse(`
	Client Information:
	===================
	Name: {{.ClientName}}
	Email: {{.ClientEmail}}
	Phone: {{.ClientPhone}}
	Buisiness: {{.ClientBuisiness}}
	Service: {{.ClientService}}
	Message: {{.ClientMessage}}
	Timestamp: {{.Timestamp}}
	This message was sent automatically via API.
	`))

	var emailBody = new(strings.Builder)
	err = tmpl.Execute(emailBody, EmailTemplate{
		ClientName:     client.(map[string]interface{})["name"].(string),
		ClientEmail:    client.(map[string]interface{})["email"].(string),
		ClientPhone:    client.(map[string]interface{})["phone"].(string),
		ClientBusiness: client.(map[string]interface{})["business"].(string),
		ClientService:  client.(map[string]interface{})["service"].(string),
		ClientMessage:  client.(map[string]interface{})["message"].(string),
		Timestamp:      time.Now(),
	})
	if err != nil {
		return err
	}

	// Configure email
	m := gomail.NewMessage()
	m.SetHeader("From", username)
	m.SetHeader("To", to)
	m.SetHeader("Subject", "New Client Inquiry -"+client.(map[string]interface{})["name"].(string))
	m.SetBody("text/plain", emailBody.String())

	// Send Email
	d := gomail.NewDialer(stmpHost, port, username, password)

	return d.DialAndSend(m)
}
