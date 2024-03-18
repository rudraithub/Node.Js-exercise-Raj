// -----------------------------:teletypeswriter :--------------------------

const tty = require('tty');

// Check if input is coming from a TTY device
if (tty.isatty(process.stdin.fd)) {
    process.stdout.write('Enter your name: ');

    // Read user input
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (data) => {
        console.log('Hello,welcome to My website ' + data.trim() + '!');
        process.exit();
    });
} else {
    console.error('Not running in a TTY environment.');
}



// => Reading Input: You can use TTY to capture user input from the terminal synchronously or asynchronously.

//=> Writing Output: TTY allows you to write output to the terminal, including formatted text, progress bars, or spinner animations.

//=> Terminal Control: You can manipulate terminal settings such as colors, cursor position, text formatting, and clearing the screen.

//=> Terminal Size: TTY provides methods to determine the size of the terminal window.

//=> TTY Streams: TTY streams are special types of streams that represent input and output to a terminal.