package entity

import (

	"time"

	"gorm.io/gorm"
)

type Booking struct {

	gorm.Model
	DateBooking time.Time

	EquipmentID uint
	Equipment   Class `gorm:"foriegnKey:EquipmentID"`

	MemberID uint
	Member   Member `gorm:"foriegnKey:MemberID"`


}