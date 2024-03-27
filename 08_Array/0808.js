//0808-write a code to find first even numbers from an existing array.


let num = [1, 2, 3, 4];

let even = num.find(function (element) {
    return element % 2 === 0;
});

console.log(`Even numbers in an array are: ${even}`);