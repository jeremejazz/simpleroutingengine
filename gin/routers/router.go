
package routers

import (
    "time"
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
)


func  InitRoutes() *gin.Engine {

	// Global Route
    r  := gin.New()    

    // Route logs
    r. Use (gin.Logger())
    r. Use (gin.Recovery())

    // CORS
    r.Use(cors.New(cors.Config{
            AllowOrigins:     []string{"https://foo.com"},
            AllowMethods:     []string{"PUT", "PATCH"},
            AllowHeaders:     []string{"Origin"},
            ExposeHeaders:    []string{"Content-Length"},
            AllowCredentials: true,
            AllowOriginFunc: func(origin string) bool {
                return origin == "https://github.com"
            },
            MaxAge: 12 * time.Hour,
        }))


    // Route Group v1
    v1  := r. Group( "api/v1" )

    AddRoutesUser(v1)
	return r
}