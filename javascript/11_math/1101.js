// ## 1101 - Calculate the area of a circle given its radius.

function findArea(r) {
    let pie = Math.PI;
    return (pie * r * r);
}
let r, Area;
r = 5;


Area = findArea(r);


console.log("Area of Circle is: " + Area);