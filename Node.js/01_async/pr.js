// const fs = require("fs");

// // fs.writeFileSync("read.txt","welcome to my channel");

// fs.writeFileSync("read.txt", "welcome to my home ");


// create server progarm :-

var http = require("http");
http.createServer(function (request, respone) {
    respone.writeHead(200, { 'content-Type': 'text/pain' });
    respone.end('helloworld\n');
}).listen(8081);
console.log('server running at http://127.0.0.1:8081/');
