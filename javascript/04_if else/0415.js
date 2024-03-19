// ## 0415-Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following

let Physics = parseInt(prompt("Enter the mark"));
let Chemistry = parseInt(prompt("Enter the mark"));
let Biology = parseInt(prompt("Enter the mark"));
let Mathematics = parseInt(prompt("Enter the mark"));
let Computer = parseInt(prompt("Enter the mark"));

let totalmark = Physics + Chemistry + Biology + Mathematics + Computer;
let grade = (totalmark / 500) * 100;

console.log("Total Marks: " + totalmark);

if (grade >= 90) {
    console.log("The grade is A");
} else if (grade >= 80) {
    console.log("The grade is B");
} else if (grade >= 70) {
    console.log("The grade is C");
} else if (grade >= 60) {
    console.log("The grade is D"); let Physics = parseInt(prompt("Enter the mark"));
}