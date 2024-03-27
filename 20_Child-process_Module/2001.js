// ## 2001 - Write a program that utilizes various methods and functionalities provided by the child_process module

const { exec } = require('child_process');

exec("cd", (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(stdout);
});