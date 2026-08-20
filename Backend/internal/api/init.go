package api

import (
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func InitAPI() error {
	router := gin.Default()

	allowedOrigins := []string{"https://citadelsolutions.tech", "https://www.citadelsolutions.tech"}

	if os.Getenv("APP_ENV") == "development" {
		allowedOrigins = append(allowedOrigins, "http://localhost:5173")
	}

	router.Use(cors.New(cors.Config{
		AllowOrigins:     allowedOrigins,
		AllowMethods:     []string{"GET", "POST", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "X-Custom-Header"},
		AllowCredentials: false,
		MaxAge:           12 * time.Hour,
	}))

	err := addRoutes(router)
	if err != nil {
		return err
	}

	return router.Run()
}
