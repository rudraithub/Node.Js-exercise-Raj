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