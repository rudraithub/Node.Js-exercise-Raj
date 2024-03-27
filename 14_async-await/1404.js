## - 1404 - write a program to create simple division using async-await.


async function divideAsync(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Division by zero error");
    }
    return dividend / divisor;
}


async function performDivision() {
    try {
        const result = await divideAsync(10, 2);
        console.log("The result is:", result); 
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Call the function to perform division
performDivision();

