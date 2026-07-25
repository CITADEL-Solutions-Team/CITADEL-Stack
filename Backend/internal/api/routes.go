package api

import "github.com/gin-gonic/gin"

/*
   Takes a pointer to a gin engine and adds routes to it.
   returns any errors it encounters to be handled higher up
   the chain
*/
func addRoutes(router *gin.Engine) error {
	router.GET("/test", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"Status": "Success",
		})
	})

	// Add rout for client inquiries
	router.POST("/api/send-email", ClientInquiryHandler)

	return nil
}
