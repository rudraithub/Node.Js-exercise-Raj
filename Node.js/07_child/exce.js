const { execFile } = require('child_process');

execFile('./somefile.sh', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`stdout:\n${stdout}`);
});
