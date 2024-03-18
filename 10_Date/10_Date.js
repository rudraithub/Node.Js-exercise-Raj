// date exerices:-

//year month date hours minutes seconds milliseconds
//let newdate= new Date(3020,5,6,9,3,2,34)

//console.log(newdate)
/*
let yr = newDate.getFullYear();
console.log("The year is", yr)

let mn = newDate.getMonth()
console.log("The month is", mn + 1)

let dat = newDate.getDate()
console.log("The date is", dat)

let hr = newDate.getHours()
console.log("The hours is", hr)

let min = newDate.getMinutes()
console.log("The minutes is", min)

newDate.setDate(28)
newDate.setMonth(4)
newDate.setFullYear(2030)
newDate.setHours(11)
newDate.setMinutes(40)
newDate.setSeconds(10)
//newDate.setTime
console.log(newDate)*/

//1001 - write a program to get a Date and time of today, get day, get year, get month and get hours.
let newDate = new Date()
console.log(newDate)

let ye = newDate.getFullYear()
let mon1 = newDate.getMonth()
let dat1 = newDate.getDay()

//1002 -  Write a program to calculate age.
let newdate1 = new Date("1990-5-15")
let yr = newdate1.getFullYear(1990)
// 
// let mon=newdate1.getMonth(5)
// let dat=newdate1.getDay(15)

let year = ye - yr
console.log(year)



