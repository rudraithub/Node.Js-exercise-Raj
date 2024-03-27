// ## 0407-Write a program to check whether a number is divisible by 5 and 11 or not.

let number = prompt("Enter the number")

if ((number % 11 == 0) && (number % 5 === 0)) {
    console.log("number is divisible 5 and 11");
} else
    console.log("number is not diviaible 5 and 11");