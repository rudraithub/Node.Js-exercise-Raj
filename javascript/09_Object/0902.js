// ## 0902-Create two Object (person, details) and merage details object in person object.

let person = {
    name: "john",
    age: 30
}
let details = {
    city: "new york",
    job: "Engineer"
}

let a = Object.assign(person, details);
for (let key of Object.keys(a)) {
    console.log(key + ":" + a[key])
}
