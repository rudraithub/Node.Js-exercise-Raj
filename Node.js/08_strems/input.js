// const fs = require("fs");
// const http = require("http");

// const server = http.createServer(); // Corrected method name


// server.on("request", (req, res) => {
//     // fs.readFile("name.txt", (err, data) => { // Corrected method name
//     //     if (err) return console.error(err);
//     //     res.end(data.toString()); // Corrected method name
//     // });
//     const rsstem = fs.createReadStrem("name.txt")
//     rsstem.on('data', (chaunkdata) => {
//         res.write(chaunkdata);
//     });
//     rsstem.on('end', () => {
//         res.end(" ");
//     });


//  3rd way 
//     const rstrems = fs.createReadStrem("name.txt");
//     rstrems.Pipe(res);

// });

// server.listen(8000, "127.0.0.1")



// # craete server :-

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    const readStream = fs.createReadStream("name.txt"); // Corrected method name and variable name
    readStream.pipe(res); // Corrected method name
});

server.listen(8000, "127.0.0.1");




