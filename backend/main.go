package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"backend/config"
	"backend/controller"
)

const PORT = "8000"

func main() {

	// open connection database
	config.ConnectionDB()

	// Generate databases
	config.SetupDatabase()

	r := gin.Default()

	r.Use(CORSMiddleware())

	r.POST("/login", controller.SignIn)
	router := r.Group("")
	{

		// User Routes
		router.GET("/members", controller.ListMembers)
		router.GET("/member/:id", controller.GetMember)
		router.POST("/members", controller.CreateMember)
		router.PATCH("/UpdateMember/:id", controller.UpdateMember)
		router.DELETE("/members/:id", controller.DeleteMember)
		router.GET("/members/count", controller.CountMembers)
		router.POST("/members/subscribe", controller.CheckSubscription)

		// Gender Routes
		router.GET("/genders", controller.ListGenders)

		// Admin Routers
		router.GET("/admins", controller.ListAdmins)
		router.GET("/admin/:id", controller.GetAdmin)
		router.POST("/CreateAdmin", controller.CreateAdmin)
		router.PATCH("/UpdateAdmin/:id", controller.UpdateAdmin)
		router.DELETE("/admins/:id", controller.DeleteAdmin)


		router.GET("/classes", controller.ListClasses)
		router.GET("/class/:id", controller.GetClass)
		router.POST("/classes", controller.CreateClass)
		router.PATCH("/classes", controller.UpdateClass)
		router.DELETE("/classes/:id", controller.DeleteClass)
		router.GET("/classes/count", controller.CountClasses)
		// ClassType Routes
		router.GET("/classtypes", controller.ListClassTypes)
		router.GET("/classtype/:id", controller.GetClassType)
		router.POST("/classtypes", controller.CreateClassType)
		router.PATCH("/classtypes", controller.UpdateClassType)
		router.DELETE("/classtypes/:id", controller.DeleteClassType)

		router.GET("/trainers", controller.ListTrainers)
		router.GET("/trainer/:id", controller.GetTrainer)
		router.POST("/trainers", controller.CreateTrainer)
		router.PATCH("/trainers", controller.UpdateTrainer)
		router.DELETE("/trainers/:id", controller.DeleteTrainer)

		router.GET("/staffs/count", controller.CountStaffs)

		// Booking Routes
		router.GET("/bookings", controller.ListBookings)
		router.GET("/booking/:id", controller.GetBooking)
		router.POST("/bookings", controller.CreateBooking)
		router.PATCH("/bookings", controller.UpdateBooking)
		router.DELETE("/bookings/:id", controller.DeleteBooking)

		// Equipment Routes
		router.GET("/equipments", controller.ListEquipments)
		router.GET("/equipment/:id", controller.GetEquipment)
		router.POST("/equipments", controller.CreateEquipment)
		router.PATCH("/equipments", controller.UpdateEquipment)
		router.DELETE("/equipments/:id", controller.DeleteEquipment)
		router.GET("/equipments/count", controller.CountEquipments)
		// Bookingequip
		router.GET("/bookingequipments", controller.ListBookingEquipments)
		router.GET("/bookingequipment/:id", controller.GetBookingEquipment)
		router.POST("/bookingequipments", controller.CreateBookingEquipment)
		router.PATCH("/bookingequipments", controller.UpdateBookingDquipment)
		router.DELETE("/bookingequipments/:id", controller.DeleteBookingDquipment)

		// Package Routes
		router.GET("/packages", controller.ListPackage)
		router.GET("/package/:id", controller.GetPackage)
		router.POST("/packages", controller.CreatePackage)
		router.PATCH("/packages", controller.UpdatePackages)
		router.DELETE("/packages/:id", controller.DeletePackage)

		// Payment Routes
		router.GET("/payments", controller.ListPayments)
		router.GET("/payment/:id", controller.GetPayment)
		router.POST("/payments", controller.CreatePayment)
		router.PATCH("/payments", controller.UpdatePayment)
		router.DELETE("/payments/:id", controller.DeletePayments)

		// Promtpay Routes
		router.GET("/promtpays", controller.ListPromptpays)
		router.GET("/promtpay/:id", controller.GetPromptpay)
		router.POST("/promtpays", controller.CreatePromtpay)
		router.PATCH("/promtpays", controller.UpdatePromptpay)
		router.DELETE("/promtpays/:id", controller.DeletePromptpay)

		// CreditCard Routes
		router.GET("/creditcards", controller.ListCreditCards)
		router.GET("/creditcard/:id", controller.GetCreditCard)
		router.POST("/creditcards", controller.CreateCreditCard)
		router.PATCH("/creditcards", controller.UpdateCreditCard)
		router.DELETE("/creditcards/:id", controller.DeleteCreditCard)
	}

	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "API RUNNING... PORT: %s", PORT)
	})

	// Run the server

	r.Run("localhost:" + PORT)

}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}