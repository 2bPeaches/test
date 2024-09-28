package entity


import (
   "gorm.io/gorm"
)

type Member struct {

	gorm.Model

	FirstName string    
	LastName  string    
	Email     string    
	Password  string
	UserName string 
	PhoneNumber 	string
	GenderID  uint      
	TypeMember string
	PaymentStatus string
	SuspensionStatus string
	Age string
	Gender    Genders  `gorm:"foreignKey: gender_id" json:"gender"`
}