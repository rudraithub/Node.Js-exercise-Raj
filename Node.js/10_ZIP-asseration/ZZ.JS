const zlib = require('zlib');
const fs = require('fs');

// Read the compressed data from a file
const compressedData = fs.readFileSync('zip.txt');

// Create an Inflate object
const inflate = zlib.createInflate();

// Create a write stream to store the decompressed data
const writeStream = fs.createWriteStream('zz1.txt');

// Pipe the compressed data through the Inflate stream and then to the write stream
inflate.pipe(writeStream);

// Handle errors during decompressioninflate.end(compressedData);
// Handle completion of decompression
writeStream.on('finish', () => {
    console.log('Decompression complete.');
});

// Write the compressed data to the Inflate stream to start decompression
inflate.end(compressedData);
