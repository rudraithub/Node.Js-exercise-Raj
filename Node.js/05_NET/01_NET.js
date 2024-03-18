// # server side 

// const net = require('net');

// const server = net.createServer((socket) => {
//   console.log('Client connected');

//   socket.on('data', (data) => {
//     console.log(`Received data from client: ${data}`);
//     socket.write(`Server received: ${data}`);
//   });

//   socket.on('end', () => {
//     console.log('Client disconnected');
//   });  
// });

// server.listen(9001, () => {
//   console.log('Server listening on port 9001');
// });



// let a = [];
// let b = [];
// let result = a == b;
// console.log(result, " result is ture or false")


// let a = [a, b, [c, d, [e, f]]];
// let results = [];
// console.log(results)
// // [a,b,c,d,e,f]


var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log(data.toString());

let i = 1;
while (i <= 5) {
  console.log("The number is " + i);
  i++;
}
