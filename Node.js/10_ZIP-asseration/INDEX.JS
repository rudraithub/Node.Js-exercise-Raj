const zlib = require('zlib');
const fs = require('fs');

// Example data to compress
const dataToCompress = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

// Compression
zlib.deflate(dataToCompress, (err, compressedData) => {
    if (err) {
        console.error('Compression error:', err);
        return;
    }

    console.log('Compressed data:', compressedData);

    // Write compressed data to a file
    fs.writeFile('zip.txt', compressedData, (err) => {
        if (err) {
            console.error('Error writing compressed data:', err);
            return;
        }
        console.log('Compressed data written to file.');
    });
});

// Decompression
fs.readFile('zip.txt', (err, compressedData) => {
    if (err) {
        console.error('Error reading compressed data:', err);
        return;
    }

    zlib.unzip(compressedData, (err, decompressedData) => {
        if (err) {
            console.error('Decompression error:', err);
            return;
        }

        console.log('Decompressed data:', decompressedData.toString());
    });
});
