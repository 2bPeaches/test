package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"backend/entity"
	"backend/config"

)
func ListGenders(c *gin.Context) {
	var genders []entity.Genders

	db := config.DB()

	db.Find(&genders)

	c.JSON(http.StatusOK, &genders)
}