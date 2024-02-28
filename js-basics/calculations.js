// calculates the person's age

// data / variables
//currentYear  = 2023
let currentYear  = new Date().getFullYear()
//birthYear    = 1990
let birthYear    = prompt("enter your year of birth")

// calculations
let age = currentYear - birthYear

// show
alert(age)



////////////////////////////////////////////

// HW1: const - is a keyword used to declare a constant variable, which means the valu of that variable cannot be reassigned.

////////////////////////////////////////////

// HW2: 

let hourlyPayment  =  10
let workingHoursPerDay  =  prompt("How many hours a day do you work?")

let dailyPayment  =  workingHoursPerDay * hourlyPayment

alert(dailyPayment)