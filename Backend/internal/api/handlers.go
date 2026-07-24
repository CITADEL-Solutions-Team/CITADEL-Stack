package api

import (
	"github.com/Opulent0/CITADEL_Solutions_Stack/internal/email"
	"github.com/gin-gonic/gin"
)

func HandleClientInquiry(c *gin.Context) {
	email.ClientInquiryHandler(c)
}
