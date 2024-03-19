// ## 0804- Write a function to convert Celsius to Fahrenheit.
let n = 0;

let Cel = parseInt(prompt("Enter the number"));

function Fah(Cel) {
    return Cel * (9 / 5) + 32;
}
for (let i = 0; i <= n; i++) {
    n = Fah(Cel);
    console.log(n);
}


function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}



//   // Example usage:


var celsiusTemperature = 25;
var convertedTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(celsiusTemperature + " Celsius is equal to " + convertedTemperature + " Fahrenheit");

