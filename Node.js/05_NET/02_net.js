// # client side


const net = require('net');

const client = net.connect({ port: 9001 }, () => {
  console.log('Connected to server');

  // Send data to the server
  client.write('how are you !');
});

client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
  // Close the connection after receiving data
  client.end();
});

client.on('end', () => {
  console.log('Connection closed by server');
});
