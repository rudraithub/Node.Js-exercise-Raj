// ## 1202:-Create a function to iterate through an array and use a callback for processing each item.

function processArray(array, callback) {
    for (let i = 0; i < array.length; i++) {

        callback(array[i], i);
    }
}


function logItem(item, index) {
    console.log(`Item at index ${index}:`, item);
}


const myArray = [1, 2, 3, 4, 5];

processArray(myArray, logItem);

