## - 1401 - write a program to create simple addition using async-await

// Function to perform addition asynchronously
async function addAsync(num1, num2) {
    return num1 + num2;
}

// Function to demonstrate async-await
async function performAddition() {
    try {
        const result = await addAsync(5, 3);
        console.log("The result is:", result); // Output: The result is: 8
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the function to perform addition
performAddition();

