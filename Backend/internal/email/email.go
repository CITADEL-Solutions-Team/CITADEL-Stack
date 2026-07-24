package email

import (
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"sync"
	"text/template"
	"time"

	"gopkg.in/gomail.v2"

	"github.com/gin-gonic/gin"
)

// ClientInfo represents the client data structure
type ClientInfo struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Phone    string `json:"phone"`
	Business string `json:"business"`
	Service  string `json:"service"`
	Message  string `json:"message"`
}

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

// inDuplicate checks if a submission is a duplicate based on email and timestamp
func isDuplicate(email string) bool {
	trackerMutex.RLock()
	defer trackerMutex.RUnlock()
	if lastSubmit, exists := submissionTracker[email]; exists {
		if time.Since(lastSubmit) < duplicateWindow {
			return true
		}
	}
	return false
}

// recordSubmission records a successful submission to prevent duplicates
func recordSubmission(email string) {
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
		ClientName:     client.Name,
		ClientEmail:    client.Email,
		ClientPhone:    client.Phone,
		ClientBusiness: client.Business,
		ClientService:  client.Service,
		ClientMessage:  client.Message,
		Timestamp:      time.Now(),
	})
	if err != nil {
		return err
	}

	// Configure email
	m := gomail.NewMessage()
	m.SetHeader("From", username)
	m.SetHeader("To", to)
	m.SetHeader("Subject", "New Client Inquiry -"+client.Name)
	m.SetBody("text/plain", emailBody.String())

	// Send Email
	d := gomail.NewDialer(stmpHost, port, username, password)

	return d.DialAndSend(m)
}

// ClientInquiryHandler handles incoming client inquiries
func ClientInquiryHandler(c *gin.Context) {
	var clientInfo ClientInfo

	// Bind JSON request to struct
	if err := c.ShouldBindJSON(&clientInfo); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   "Invalid request data",
			"message": err.Error(),
		})
		return
	}

	// Validate required fields
	if clientInfo.Name == "" || clientInfo.Email == "" {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Name and Email are required",
		})
		return
	}

	// Check for duplicate submissions (simple rate limiting)
	if isDuplicate(clientInfo.Email) {
		c.JSON(http.StatusTooManyRequests, gin.H{
			"error": "Duplicate submission detected. Please wait before submitting again.",
		})
		return
	}

	// Send email
	if err := SendEmail(clientInfo); err != nil {
		log.Printf("Failed to send email: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to send email",
		})
		return
	}

	// Record successful submission
	recordSubmission(clientInfo.Email)

	// Return success response
	c.JSON(http.StatusOK, gin.H{
		"message": "Inquiry received and email send successfully",
		"client":  clientInfo,
	})
}
