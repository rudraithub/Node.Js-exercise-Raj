const { exec } = require('child_process');

// Execute a command in the shell
exec('ls -lh', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`Result:\n${stdout}`);
});
