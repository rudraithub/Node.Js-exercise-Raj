// ## 0412-Write a program to input any character and check whether it is alphabet, digit or special character.

let char = prompt("enter the character ");

if (char >= "a" || char > 0 || char < 0) {
    console.log("This is a character");

} else
    console.log("This is a digit or special character");