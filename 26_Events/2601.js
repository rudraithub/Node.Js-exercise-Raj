// ## 2601 - write a program for listen an event using event module.


const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('customEvent', () => {
    console.log('Custom event occurred!');
});

eventEmitter.emit('customEvent');
