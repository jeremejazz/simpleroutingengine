package routers

import (
    "github.com/gin-gonic/gin"
    //"panda-api/controllers"
)

func AddRoutesUser(r *gin.RouterGroup) {
    r.GET("/hello", func(c *gin.Context){
    	c.JSON(200, gin.H{
    		"message" : "boing",
    	})
    })
}