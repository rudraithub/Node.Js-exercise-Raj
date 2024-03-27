## - 1402 - write a program to create simple subtraction using async-await.


async function subtractAsync(num1, num2) {
    return num1 - num2;
}


async function performSubtraction() {
    try {
        const result = await subtractAsync(10, 3);
        console.log("The result is:", result);
        console.error("Error:", error);
    }
}


performSubtraction();

