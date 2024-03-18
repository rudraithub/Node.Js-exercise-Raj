//## 04101-write a program to check number greater then 5 number.
// Test Data

// let a =prompt("ENTER THE NUMBER");
// a = parseInt(a);

// if(a<=5){
//     alert("number is less than or equal to 5");

// }else{
//     alert("number is grether than");
// }

// ## 0402-Write a program to check text is empty or not.

// let a = prompt("ENTER THE LINE ");

// if(a.length===0);
//     {alert("not empty");
// }

//## 0403-Write a program to check two value is equal or not.

// let num1 = 10;
// let num2 = 20;

// if(num1<=num2){
//    console.log ("num1 is lessthan or euqal to num2");
// }else{console.log("num1 is greter than or euqal to num2");}

// ## 0403-Write a program to find maximum between two numbers.
// let a = 10;
// let b = 20;
// if(a<b){console.log("a is less than b");}
// else{console.log("A is greter than b")}

// ## 0405-Write a program to find maximum between three numbers.

// let result = Math.max(10,20,25);
// if(a<b){
//     console.log("a is less than b")
// }else if(b>c){
//     console.log("b is grether than c")
// }else if (c<a){
//     console.log("c is less than a")
// }

//## 0406-Write a program to check whether a number is negative, positive or zero.
// let a= prompt("Enter the number ");

// if (0 < a ){
//    console.log ( "number is postive ");
// }else if (0 > a){ 
//    console.log ("number is negative or equal to a");
// }

// ## 0407-Write a program to check whether a number is divisible by 5 and 11 or not.

// let number = prompt("Enter the number") 

// if ((number%11==0)&&(number % 5 ===0)){
//     console.log("number is divisible 5 and 11");
// }else
// console.log("number is not diviaible 5 and 11");

//## 0408-Write a program to check whether a number is even or odd.

// let num = prompt("Enter the number");

// if(num/2===1){
//     console.log("enumber is even");
// }else
// console.log("number is odd");

// ## 0409-Write a program to check whether a year is leap year or not.
// let num = prompt("Enter the year");

// if (num%4==0){
//     console.log("This is a leap year");
// }else
// console.log("This is not a leap year");

// ## 0410-Write a program to check whether a character is alphabet or not.

// let char = prompt("enter the alphabet ");

// if((char >="a"&& char <="z")||(char >= "A" && char <= "Z")){
// console.log("This is a alpbhabet");
// }else
// console.log("This is not a alphabet ");

//## 0411-write a program to check whether character is vowel or not.
// let a = prompt("enter the vowel");

// if (a == "a"||a=="e"||a=="i"||a=="o"||a=="u"){
//    console.log("This is vowel ");
// }else
// console.log("This is not a vowel");

// ## 0412-Write a program to input any character and check whether it is alphabet, digit or special character.

// let char= prompt("enter the character ");

// if (char>="a" || char>0 || char <0){
//     console.log ("This is a character");

// }else
// console.log("This is a digit or special character");

// ## 0413-Write a program to check whether a character is uppercase or lowercase alphabet.
// let  Data =prompt("Enter the character");

// if(Data>="a" && Data<="z"){
//     console.log("This is a lower case");
// }else if (Data>="A" && Data<="Z"){
// console.log("This is a upper case");
// }else{console.log("INVDID CHARACTER ");}

// ## 0414-Write a program to calculate profit or loss.

// let  cost = 1000;
// let selling = 1500;

// console.log ("THIS IS YOYR PROFIT" ,selling-cost);

// ## 0415-Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following
// let Physics = parseInt(prompt("Enter the mark"));
// let Chemistry = parseInt(prompt("Enter the mark"));
// let Biology = parseInt(prompt("Enter the mark"));
// let Mathematics = parseInt(prompt("Enter the mark"));
// let Computer = parseInt(prompt("Enter the mark"));

// let totalmark = Physics + Chemistry + Biology + Mathematics + Computer;
// let grade = (totalmark / 500) * 100;

// console.log("Total Marks: " + totalmark);

// if (grade >= 90) {
//     console.log("The grade is A");
// } else if (grade >= 80) {
//     console.log("The grade is B");
// } else if (grade >= 70) {
//     console.log("The grade is C");
// } else if (grade >= 60) {
//     console.log("The grade is D");let Physics= parseInt(prompt("Enter the mark"));
// }

// ## 0416-Write a program to input basic salary of an employee and calculate its Gross salary according to following:
// const basicsalary= 22000; 
// let hra
// let dn 

// if(basicsalary<=10000){
//     hra=20;
//     da=80;
// }else if( basicsalary<=20000){
//     hra=25;
//     da=90;
// }else{
//   hra=30;
//   da=95;
// }

// const hrapr = (hra/100)*basicsalary;
// const dapr =(da/100)*basicsalary;

// const Gross=basicsalary+hra+da;
// console.log("gross salary =",Gross);

//## 0417-Write a program to input electricity unit charges and calculate total electricity bill according to the given condition
const unit = 150;
let charges

if (unit <= 50) {
    charges = 0.50;
} else if (unit >= 100) {
    charges = 0.75;
} else if (unit >= 250) {
    charges = 1.20;
} else if (unit <= 250) {
    charges = 1.50;
}

let supercharge = (0.20 + (charges * unit))

let totalcharges = ((charges * unit) + supercharge)
console.log(totalcharges)