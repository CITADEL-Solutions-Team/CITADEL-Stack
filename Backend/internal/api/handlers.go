package api

import (
	"log"
	"net/http"

	"github.com/Opulent0/CITADEL_Solutions_Stack/internal/email"
	"github.com/gin-gonic/gin"
)

// ClientInquiryHandler handles incoming client inquiries
func ClientInquiryHandler(c *gin.Context) {
	var clientInfo email.ClientInfo

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
	if email.IsDuplicate(clientInfo.Email) {
		c.JSON(http.StatusTooManyRequests, gin.H{
			"error": "Duplicate submission detected. Please wait before submitting again.",
		})
		return
	}

	// Convert ClientInfo to a map for compatibiltiy with existing SendEmail function

	// Send email
	if err := email.SendEmail(clientInfo); err != nil {
		log.Printf("Failed to send email: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to send email",
		})
		return
	}

	// Record successful submission
	email.RecordSubmission(clientInfo.Email)

	// Return success response
	c.JSON(http.StatusOK, gin.H{
		"message": "Inquiry received and email send successfully",
		"client":  clientInfo,
	})
}
