// ## 2201- write a program for read stream data 


const fs = require('fs');

// Create a readable stream from a text file
const readStream = fs.createReadStream('output.txt', 'utf8');

// Listen for the 'data' event to receive chunks of data
readStream.on('data', chunk => {
    console.log("Received chunk:", chunk);
});

// Listen for the 'end' event to know when the stream ends
readStream.on('end', () => {
    console.log("End of stream.");
});
