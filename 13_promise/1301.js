## 1301 - create a function using promise and return array Data.

function getData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data asynchronously (e.g., from a database or API)
        setTimeout(() => {
            const dataArray = [1, 2, 3, 4, 5];
            resolve(dataArray);
        }, 1000); // Simulating a delay of 1 second
    });
}

// Usage example
getData()
    .then(data => {
        console.log("Data:", data); // Output: Data: [1, 2, 3, 4, 5]
    })
    .catch(error => {
        console.error("Error:", error);
    });

