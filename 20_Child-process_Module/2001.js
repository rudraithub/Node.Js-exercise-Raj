// ## 2001 - Write a program that utilizes various methods and functionalities provided by the child_process module


const { exec } = require('child_process');

const command = '/home/ubuntu/Raj/js material/Node.Js-exercise-Raj/Node.Js-exercise-Question/20_Child-process_Module/2001.js';

exec(command, (error, stdout, stderr) => {
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


