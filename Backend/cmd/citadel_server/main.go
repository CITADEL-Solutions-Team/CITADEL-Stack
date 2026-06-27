package main

import "github.com/Opulent0/CITADEL_Solutions_Stack/internal/api"

func main() {
	err := api.InitAPI()
	if err != nil {
		panic(err)
	}
}
