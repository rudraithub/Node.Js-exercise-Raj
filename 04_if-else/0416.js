// ## 0416-Write a program to input basic salary of an employee and calculate its Gross salary according to following:

const basicsalary = 22000;
let hra
let dn

if (basicsalary <= 10000) {
    hra = 20;
    da = 80;
} else if (basicsalary <= 20000) {
    hra = 25;
    da = 90;
} else {
    hra = 30;
    da = 95;
}

const hrapr = (hra / 100) * basicsalary;
const dapr = (da / 100) * basicsalary;

const Gross = basicsalary + hra + da;
console.log("gross salary =", Gross);