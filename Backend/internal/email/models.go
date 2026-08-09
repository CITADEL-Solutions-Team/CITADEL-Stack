package email

import "time"

// ClientInfo represents the client data structure
type ClientInfo struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Phone    string `json:"phone"`
	Business string `json:"business"`
	Service  string `json:"service"`
	Message  string `json:"message"`
}

type EmailTemplate struct {
	Info      ClientInfo
	Timestamp time.Time
}
