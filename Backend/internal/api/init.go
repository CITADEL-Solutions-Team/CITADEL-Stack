package api

import "github.com/gin-gonic/gin"

// Creates a new api and runs it, returning any errors it encounters
func InitAPI() error {
	router := gin.Default()

	// Add routes to the api
	err := addRoutes(router)
	if err != nil {
		return err
	}

	// Will return errors if it has issues with connection.
	err = router.Run()
	if err != nil {
		return err
	}
	
	return nil
}
