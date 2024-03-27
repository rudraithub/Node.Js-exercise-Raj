// ## 2501 - write a program for compress data using zlib module and also decompress data. 


const zlib = require('zlib');

const inputData = "welcome to my website";

zlib.deflate(inputData, (err, compressedData) => {
    if (err) return console.error('Compression error:', err);
    console.log('Compressed data:', compressedData);

    zlib.inflate(compressedData, (err, decompressedData) => {
        if (err) return console.error('Decompression error:', err);
        console.log('Decompressed data:', decompressedData.toString());
    });
});
