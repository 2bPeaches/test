package entity

import (
	"time"

	"gorm.io/gorm"
)

type Class struct {
	gorm.Model    
	EquipmentName string       
	Deets     string    
	StartDate time.Time
	EndDate   time.Time   
	EquipmentPic  string

	
	AdminID uint
	Admin   Admin `gorm:"foriegnKey:AdminID"`

	BookingEquipment []BookingEquipment `gorm:"foreignKey:ClassID"`

} 
