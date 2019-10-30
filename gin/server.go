package main

import (
	"os"
	"routerengine/routers"
)

const ENV_RUN_PORT = "PORT"
var  RUN_PORT string = "8001"

func  init () {
	getEnvPort ()
}

func  getEnvPort () {
	port  := os.Getenv (ENV_RUN_PORT)

	if  len (port)> 0 {
		RUN_PORT = port
	}
}

func  main () {
	// Start all routes
	router := routers.InitRoutes()

	// Start Server
    router.Run(":" + RUN_PORT)
}