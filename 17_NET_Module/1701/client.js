const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
    console.log('Connected to server.');
    client.write('Hello from client!');
});