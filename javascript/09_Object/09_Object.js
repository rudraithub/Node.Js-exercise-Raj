// Array

// ## 0901- Create an object representing a person with properties like name, age, and city. and access and print person's name, age and city.

// let obj={
//     name:"john",
//     age: 30,
//     city:"new york"
// }
//     console.log(obj.name+": "+"name")
//     console.log(obj.age+" :"+"age")
//     console.log(obj.city+" :"+"city")

// ## 0902-Create two Object (person, details) and merage details object in person object.
// let person ={
//     name:"john",
//     age: 30
// }
// let details={
//     city: "new york",
//     job: "Engineer"
// }

// let a = Object.assign(person,details);
// for (let key of Object.keys(a)){
// console.log(key+":" +a[key])
// }

// ## 0903- Create an object called vehicle using Object.create().
// let vehicle={
//     make: "Toyota",
//     model: "Camry", 
//     year: 2022, 
//     wheels: 4
// }
// console.log(vehicle)

// let vehicle1=Object.create(vehicle)
// vehicle1.make="Toyota",
// vehicle1.model= "Camry", 
// vehicle1.year= 2022, 
// vehicle1.wheels= 4,
// vehicle1.type= "suv" 
// console.log(vehicle1)


//## 0904- create an object named 'fruits' with fruit names as keys and their quantity as values. Print each fruit and its quantity from the 'fruits' object.
// let fruits={
//     apple:5,
//     banana:3,
//     cheery:10
// }
// console.log ("there are"+" " +fruits.apple+" "+"apple")
// console.log ("there are"+" " +fruits.banana+" "+"banana")
// console.log ("there are"+" " +fruits.cheery+" "+"cheery")



//## 0905 - Create an object named car with properties like make, model, and year. Print all the property names of the car object.

// let car=[
//     'make',
//     'model',
//     'year'
// ]
// console.log(car)  

// ## 0906 - create an object named country with properties like name, capital, and population. Print all the keys of the country object.

const country = {
    newname: "india",
    capaital: "New Delhi",
    population: "140cr"
}
const keys = Object.keys(country);
console.log(keys);
