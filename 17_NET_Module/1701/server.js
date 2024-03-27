const net = require('net');

const server = net.createServer(socket => {
    console.log('Client connected.');

    socket.on('data', data => {
        console.log('Received:', data.toString());
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
