package controller

import (
	"net/http"
	"time"

	"backend/config"
	"backend/entity"

	"github.com/gin-gonic/gin"
)

// POST /equipment/booking
func CreateEquipmentBooking(c *gin.Context) {
	var booking entity.Booking

	// Bind to booking variable
	if err := c.ShouldBindJSON(&booking); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db := config.DB()

	// Validate Equipment
	var equipment entity.Class
	db.First(&equipment, booking.EquipmentID)
	if equipment.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Equipment not found"})
		return
	}

	// Validate Member
	var member entity.Member
	db.First(&member, booking.MemberID)
	if member.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Member not found"})
		return
	}

	// Create Booking
	b := entity.Booking{
		DateBooking: booking.DateBooking,
		EquipmentID: booking.EquipmentID,
		Equipment:   equipment,
		MemberID:    booking.MemberID,
		Member:      member,
	}

	// Save to database
	if err := db.Create(&b).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Created success", "data": b})
}

// GET /equipment/booking/:id
func GetEquipmentBooking(c *gin.Context) {
	ID := c.Param("id")
	var booking entity.Booking

	db := config.DB()
	results := db.Preload("Equipment").Preload("Member").First(&booking, ID)
	if results.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, booking)
}

// GET /equipment/bookings
func ListEquipmentBookings(c *gin.Context) {
	var bookings []entity.Booking

	db := config.DB()
	results := db.Preload("Equipment").Preload("Member").Find(&bookings)
	if results.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, bookings)
}

// DELETE /equipment/bookings/:id
func DeleteEquipmentBooking(c *gin.Context) {
	id := c.Param("id")
	db := config.DB()
	if tx := db.Exec("DELETE FROM bookings WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "id not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Deleted successful"})
}

// PATCH /equipment/bookings/:id
func UpdateEquipmentBooking(c *gin.Context) {
	var booking entity.Booking

	BookingID := c.Param("id")

	db := config.DB()
	result := db.First(&booking, BookingID)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "id not found"})
		return
	}

	if err := c.ShouldBindJSON(&booking); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request, unable to map payload"})
		return
	}

	result = db.Save(&booking)
	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Updated successful"})
}
