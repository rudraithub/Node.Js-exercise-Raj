//## 0805-write a function to find the area of a given Rectangle

function arearectangle(length, Width) {
    let Rectangle = (length * Width);
    return Rectangle;
}

let length = 23;
let width = 2;
let multiplyrectangle = arearectangle(length, width);
console.log("lengnth=", length, "width= ", width, " = " + multiplyrectangle + " Rectangle ");