const path = require('path');

const filePath = '/path/to/file.txt';


console.log("1. basename:", path.basename(filePath));

console.log("2. dirname:", path.dirname(filePath));

console.log("3. extname:", path.extname(filePath));

console.log("4. isAbsolute:", path.isAbsolute(filePath));

console.log("5. join:", path.join('/path', 'to', 'file.txt'));

console.log("6. normalize:", path.normalize('/path/to//folder/file.txt'));

console.log("7. parse:", path.parse(filePath));

console.log("8. resolve:", path.resolve(filePath));
