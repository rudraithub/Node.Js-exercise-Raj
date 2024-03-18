//function exerices:-

// ## 0801-Write a function to find Factorial of a number
// let n = 5;
// function factorial(n) { 
// 	if (n === 0) { 
// 		return 1; 
// 	} 
// 	else { 
// 		return n * factorial( n - 1 ); 
// 	} 
// } 

// console.log(factorial(n));


//## 0802-Write a function that returns the square of a number

// let n = parseInt(prompt("Enter the number"))
// function square(n){
// if(n==0){
//  return n===0
//    }else{
//     return n*n
//    }
// }
// console.log(square(n))

//## 0803-Write a function that returns the cube of a number.

// let n = parseInt(prompt("Enter the number "))

// function cube(n) {
//     let cube;
//     cube = n * n * n;
//     console.log(cube)
// }
// console.log(cube(n))

// let n = parseInt(prompt("Enter the number"))
// function square(n){
// if(n==0){
//  return n===0
//    }else{
//     return n*n*n
//    }
// }
// console.log(square(n))

// ## 0804- Write a function to convert Celsius to Fahrenheit.
// let n = 0;

// let Cel = parseInt(prompt("Enter the number"));

// function Fah(Cel){
//     return Cel*(9/5)+32;
// }
// for (let i=0; i<=n; i++){
//     n = Fah(Cel);
//     console.log(n);
// }


// function celsiusToFahrenheit(celsius) {
//     var fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
//   }

//   // Example usage:
//   var celsiusTemperature = 25;
//   var convertedTemperature = celsiusToFahrenheit(celsiusTemperature);
//   console.log(celsiusTemperature + " Celsius is equal to " + convertedTemperature + " Fahrenheit");


// ## 0805-write a function to find the area of a given Rectangle

function arearectangle(length, Width) {
    let Rectangle = (length * Width);
    return Rectangle;
}

let length = 23;
let width = 2;
let multiplyrectangle = arearectangle(length, width);
console.log("lengnth=", length, "width= ", width, " = " + multiplyrectangle + " Rectangle ");