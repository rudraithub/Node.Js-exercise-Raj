
// ## 0413-Write a program to check whether a character is uppercase or lowercase alphabet.

let Data = prompt("Enter the character");

if (Data >= "a" && Data <= "z") {
    console.log("This is a lower case");
} else if (Data >= "A" && Data <= "Z") {
    console.log("This is a upper case");
} else { console.log("INVDID CHARACTER "); }