//0707-write a new array that contains the squares of each number in the original array.

let numbers = [1, 2, 3, 4];

let even = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0)
        even.push(numbers[i]);
}

console.log(`Even numbers in an array are: ${even}`);