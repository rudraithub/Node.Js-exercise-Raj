//  path module:--------------------------

const path = require('path');

// console.log(path.basename('/home/ubuntu/Raj/Raj/node/pathmo/path.js'))

// console.log(__filename)

// console.log(path.dirname('/home/ubuntu/Raj/Raj/node/pathmo/path.js'));
// console.log(path.dirname(__filename));


// console.log(path.extname(__filename));


//  join in ".." is the one level up.the last parameter (..) is instrucating path.join to ' go aback directory.

// console.log(path.join("oop", " python/django", " node", "app", "webdev."));

// console.log(path.join("oop", " python/django", " node", "app", "webdev.", ".."));

// console.log(path.join("oop", " python/django", " node", "app", "webdev.", "..", ".."));


// path.winw32.normalize: impimentation of the parh method
// normalize module is remove and igoner the "/"


// STRINGDECODER:-----------------

// const buffer = require("buffer").Buffer;
// const stringdecoder = require("string_decoder").StringDecoder    // THIS LINE IS FORMATE OF STRINGDECODER

// let decoder = new stringdecoder("utf8");
// let buff = Buffer.from("this is only test", "utf8");
// console.log(decoder.end(buff));
// // console.log(buff.toString('hex'));
// // console.log(buff.toString('base64'));



const { StringDecoder } = require('string_decoder');

// Create a new StringDecoder instance
const decoder = new StringDecoder('utf8');

// Create a buffer containing UTF-8 encoded data
const buffer1 = Buffer.from('Hello, ', 'utf8');
const buffer2 = Buffer.from('world!', 'utf8');

// Write the buffers to the decoder
console.log(decoder.write(buffer1)); // Output: Hello,
console.log(decoder.write(buffer2)); // Output: world!

// Mark the end of the input stream to the decoder
console.log(decoder.end()); // Output: (empty string)

// Attempt to write additional data after calling end
// This will throw an error because the decoder has already ended
console.log(decoder.end(Buffer.from('HELLOWORLD', 'utf8'))); // Throws an error