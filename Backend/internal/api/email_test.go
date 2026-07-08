// Backend/internal/api/email_test.go
package api

import (
	"encoding/json"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/gin-gonic/gin"
)

func TestClientInquiryHandler(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Create a test request body
	requestBody := `{
        "name": "Test User",
        "email": "test@example.com",
        "phone": "123-456-7890",
        "service": "Web Development",
        "message": "This is a test message"
    }`

	// Create a test request
	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	// Create a response recorder
	w := httptest.NewRecorder()

	// Create a Gin context
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	// Call the handler
	ClientInquiryHandler(c)

	// Check the response
	if w.Code != 200 {
		t.Errorf("Expected status 200, got %d", w.Code)
	}

	// Verify response contains expected fields
	var response map[string]interface{}
	json.Unmarshal(w.Body.Bytes(), &response)

	if response["message"] != "Inquiry received and email send successfully" {
		t.Error("Unexpected response message")
	}
}

func TestClientInquiryHandlerInvalidData(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Create a test request with invalid data
	requestBody := `{
        "name": "",
        "email": "",
        "phone": "123-456-7890",
        "message": "This is a test message"
    }`

	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 400 {
		t.Errorf("Expected status 400, got %d", w.Code)
	}
}

func TestClientInquiryHandlerMissingRequiredFields(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Test with missing name
	requestBody := `{
        "email": "test@example.com",
        "phone": "123-456-7890",
        "message": "This is a test message"
    }`

	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 400 {
		t.Errorf("Expected status 400 for missing name, got %d", w.Code)
	}

	// Test with missing email
	requestBody = `{
        "name": "Test User",
        "phone": "123-456-7890",
        "message": "This is a test message"
    }`

	req = httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w = httptest.NewRecorder()
	c, _ = gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 400 {
		t.Errorf("Expected status 400 for missing email, got %d", w.Code)
	}
}

func TestClientInquiryHandlerEmptyFields(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Test with empty name and email
	requestBody := `{
        "name": "",
        "email": "",
        "phone": "123-456-7890",
        "message": "This is a test message"
    }`

	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 400 {
		t.Errorf("Expected status 400 for empty name and email, got %d", w.Code)
	}
}

func TestClientInquiryHandlerValidServiceField(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Test with service field
	requestBody := `{
        "name": "Test User",
        "email": "test@example.com",
        "phone": "123-456-7890",
        "service": "Mobile App Development",
        "message": "This is a test message"
    }`

	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 200 {
		t.Errorf("Expected status 200 for valid service field, got %d", w.Code)
	}
}

func TestClientInquiryHandlerEmptyServiceField(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Test with empty service field
	requestBody := `{
        "name": "Test User",
        "email": "test@example.com",
        "phone": "123-456-7890",
        "service": "",
        "message": "This is a test message"
    }`

	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 200 {
		t.Errorf("Expected status 200 for empty service field, got %d", w.Code)
	}
}

func TestClientInquiryHandlerLongServiceField(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Test with very long service field
	longService := strings.Repeat("A", 1000)
	requestBody := `{
        "name": "Test User",
        "email": "test@example.com",
        "phone": "123-456-7890",
        "service": "` + longService + `",
        "message": "This is a test message"
    }`

	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 200 {
		t.Errorf("Expected status 200 for long service field, got %d", w.Code)
	}
}

func TestClientInquiryHandlerSpecialCharactersInService(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Test with special characters in service field
	requestBody := `{
        "name": "Test User",
        "email": "test@example.com",
        "phone": "123-456-7890",
        "service": "Web & Mobile Development 2023!",
        "message": "This is a test message"
    }`

	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 200 {
		t.Errorf("Expected status 200 for special characters in service field, got %d", w.Code)
	}
}

func TestClientInquiryHandlerNoServiceField(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Test without service field (should still work)
	requestBody := `{
        "name": "Test User",
        "email": "test@example.com",
        "phone": "123-456-7890",
        "message": "This is a test message"
    }`

	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 200 {
		t.Errorf("Expected status 200 without service field, got %d", w.Code)
	}
}

func TestClientInquiryHandlerOnlyRequiredFields(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Test with only required fields (name and email)
	requestBody := `{
        "name": "Test User",
        "email": "test@example.com"
    }`

	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 200 {
		t.Errorf("Expected status 200 with only required fields, got %d", w.Code)
	}
}

func TestClientInquiryHandlerInvalidJSON(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Test with invalid JSON
	requestBody := `{
        "name": "Test User",
        "email": "test@example.com",
        "phone": "123-456-7890",
        "message": "This is a test message"
    ` // Missing closing brace

	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 400 {
		t.Errorf("Expected status 400 for invalid JSON, got %d", w.Code)
	}
}

func TestClientInquiryHandlerValidEmailFormat(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Test with valid email format
	requestBody := `{
        "name": "Test User",
        "email": "valid.email@domain.com",
        "phone": "123-456-7890",
        "service": "Web Development",
        "message": "This is a test message"
    }`

	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 200 {
		t.Errorf("Expected status 200 for valid email format, got %d", w.Code)
	}
}

func TestClientInquiryHandlerInvalidEmailFormat(t *testing.T) {
	// Enable testing mode
	SetTestingMode(true)

	// Test with invalid email format
	requestBody := `{
        "name": "Test User",
        "email": "invalid-email",
        "phone": "123-456-7890",
        "service": "Web Development",
        "message": "This is a test message"
    }`

	req := httptest.NewRequest("POST", "/client-inquiry", strings.NewReader(requestBody))
	req.Header.Set("Content-Type", "application/json")

	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)
	c.Request = req

	ClientInquiryHandler(c)

	if w.Code != 200 {
		t.Errorf("Expected status 200 for invalid email (validation happens in handler), got %d", w.Code)
	}
}
