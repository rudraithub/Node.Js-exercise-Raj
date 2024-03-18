// Operators Exercise:

//0301-write a program to perform all Arithmetic Operations.
/*

let a = 56;
let b = 80;

console.log("a+b =", a + b)
console.log("a-b = ", a - b)
console.log("a*b =", a * b)
console.log("a/b = ", a / b)
console.log("a%b = ", a % b)
console.log("++a= ", ++a)
console.log("--a = ", --a)
console.log("---b =", --b)

/*0302-write a program to perform all Comparison Operations.

let x = 12;
let y = 20;

console.log("x<=y ", x <= y)
console.log("x<y ", x < y)
console.log("x>y", x > y)
console.log("x>=y", x >= y)
console.log("x==y", x == y)
console.log("x!=y", x != y)

// 0303-write a program to perform all Assignment Operations.
let e=52;
let f=45;

//console.log("e=f =",e=f)
console.log("e+=f=",e+=f)
console.log("e-=f=",e-=f)
console.log("e*=f=",e*=f)
console.log("e/=f=",e/=f)
console.log("e%=f=",e%=f)
console.log("e**=f=",e**=f)

//0304- Write a program to perform all arithmetic operator(Ex:2).

let a = 99;
let b = 12;
let c ;

console.log("c=", c=a + b)
console.log("c= ", c=a - b)
console.log("c=", c=a * b)
console.log("c= ", c=a / b)
console.log("c= ", c=a % b)


//## 0305-Write a program to perform all assignment operator(Ex:3).

let a = 25;
let b = 8;


console.log("sum(Addition)=",a+b)
console.log("difference(subtraction)=",a-b)
console.log("product(multiply)=",a*b)
console.log("remainder(module)=",a%b)

//## 0306- Write a program to perform all logical operator.

let x=22;
let y=39;

console.log("x&&y=",x&&y)
console.log("x||y=",x||y)
console.log("x!y=",!x)

//0307 - Write a program to perform all Bitwise operator.

let a = 5; 
let b = 3;

console.log("a&b=",a&b)
console.log("a|b=",a|b)
console.log("~a",~a)
console.log("a^b",a^b)
console.log("a<<y",a<<b)
console.log("a>>b",a>>b)
console.log("a>>>b",a>>>b)

// 0308 - Write a program to perform all Type operator.
let a = 5;
let b = "Hello";
let c = true;
let d = {
    a: "a"
}
let e = new Number(5);
let f = new String("Hello");

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)


//0309- Write a program to convert meters to kilometers.
let meters = 50; // Distance in meters
console.log(meters/1000)

//0310- Write a program to convert centimeters to inch.
let centimeters = 78;
console.log(centimeters*0.393701)


//0311- WAP structure enter value any number and display cube of it.

let number =prompt("Enter The Number:")// You can change this value to any number
number=parseInt(number)

console.log(number*number*number)

//0312- WAP structure swap two number and interchange/swap of that number 

 let number1 = 10;
 let number2 = 20;

 let teamp;


 console.log(`number1=${number2}`)
 console.log(`number2=${number1}`)

 //0313- WAP structure swap two number and interchange/swap of that number without using 3nd variable

 number1 = 10;
 number2 = 20;
 
 number1=number1^number2
 number2=number1^number2
 number1=number1^number2
 console.log(number1,number2)*/

//0314- WAP structure enter employee salary and count TA(10%), DA(7%) and PF(12%) of basic salary

let a = prompt("Enter The basic salary");

let ta = a * 0.10;
let da = a * 0.07;
let pf = a * 0.12
let totalsalary = a - ta - da + pf;
console.log("TA (10%):", ta)
console.log("DA (7%):", da)
console.log("PF (12%):", pf)
console.log("Total Salary:", totalsalary)

