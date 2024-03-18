// const SHA256 = require("crypto-js/sha256");
// const plaindata = "raj chauhan "
// const hasheddata = SHA256(plaindata).toString();
// console.log(hasheddata);



// function of node.js :------------------------------------------------------------------------------------------------


// const currentDirectory = process.cwd();
// console.log('Current working directory:', currentDirectory);

process.kill(process.pid, 'SIGTERM'); // Sends SIGTERM signal to the current process

// process.on('exit', (code) => {
//     console.log(`Process exited with code ${code}`);
//   });
  

const memoryUsage = process.memoryUsage();
console.log('Memory Usage:', memoryUsage);



// hrtime :-----------------------------------------------
const startTime = process.hrtime();

// Perform some task
for (let i = 0; i < 1000000; i++) {
    // Some operation
}

const elapsed = process.hrtime(startTime);

console.log('Execution time (seconds):', elapsed[0]);
console.log('Execution time (nanoseconds):', elapsed[1]);
