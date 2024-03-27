// ## 0903- Create an object called vehicle using Object.create().

let vehicle = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    wheels: 4
}
console.log(vehicle)

let vehicle1 = Object.create(vehicle)
vehicle1.make = "Toyota",
    vehicle1.model = "Camry",
    vehicle1.year = 2022,
    vehicle1.wheels = 4,
    vehicle1.type = "suv"
console.log(vehicle1)

