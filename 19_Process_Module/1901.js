// ## 1901 - Write a program that utilizes various methods and properties provided by the process module.


console.log("Memory Usage:", process.memoryUsage());

console.log("Process Arguments:", process.argv);


console.log("Environment Variables:", process.env);


console.log("Current Working Directory:", process.cwd());


console.log("Process ID:", process.pid);


console.log("Platform:", process.platform);


console.log("Node.js Version:", process.version);

console.log("Process Uptime (seconds):", process.uptime());


console.log("Exiting process...");


process.exit();
