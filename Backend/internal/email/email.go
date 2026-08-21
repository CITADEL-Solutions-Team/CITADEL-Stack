package email

import (
	"log"
	"os"
	"strconv"
	"strings"
	"sync"
	"text/template"
	"time"

	"gopkg.in/gomail.v2"
)

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
func SendEmail(client ClientInfo) error {
	if isTesting {
		log.Printf("TEST MODE: Would send email to %s", client.Email)
		return nil
	}

	stmpHost := os.Getenv("SMTP_HOST")
	stmpPort := os.Getenv("SMTP_PORT")
	username := os.Getenv("EMAIL_USERNAME")
	fromaddr := os.Getenv("EMAIL_FROM")
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
	Name: {{.Info.Name}}
	Email: {{.Info.Email}}
	Phone: {{.Info.Phone}}
	Business: {{.Info.Business}}
	Service: {{.Info.Service}}
	Message: {{.Info.Message}}
	Timestamp: {{.Timestamp}}
	This message was sent automatically via API.
	`))

	var emailBody = new(strings.Builder)
	err = tmpl.Execute(emailBody, EmailTemplate{
		Info: ClientInfo{Name: client.Name,
			Email:    client.Email,
			Phone:    client.Phone,
			Business: client.Business,
			Service:  client.Service,
			Message:  client.Message},
		Timestamp: time.Now(),
	})
	if err != nil {
		return err
	}

	// Configure email
	m := gomail.NewMessage()
	m.SetHeader("From", fromaddr)
	m.SetHeader("To", to)
	m.SetHeader("Subject", "New Client Inquiry -"+client.Name)
	m.SetBody("text/plain", emailBody.String())

	// Send Email
	d := gomail.NewDialer(stmpHost, port, username, password)

	return d.DialAndSend(m)
}
