// ## 1201 - Create a function that performs a simple addition operation and uses a callback to display the result.

function add(num1, num2, callback) {
    const result = num1 + num2;
    callback(result);
}

function displayResult(result) {
    console.log("The result is:", result);
}

// Example usage:
add(5, 3, displayResult);
