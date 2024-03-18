// Questions :-----------------

// const EventEmitter = require("events");

// const event = new EventEmitter();

// event.on("saymyname", () => {
//     console.log("my name is raj chauhan");
// });

// event.emit("saymyname");


// The concept is quite simple : emitter object emit named  even that cause previously registered listeners to be call. so emitter object basically has two  main features:

// not be correct below programm:-----------------------------------------------------------

// event.emit("saymyname");

// event.on("saymyname", () => {
//     console.log("my name is raj chauhan");
// });

// 1. emitter name events.
// 2. registered and understanding listener funcation.


// 2.

// const EventEmitter = require("events");

// const event = new Even
// tEmitter();

// event.on("saymyname", () => {
//     console.log("my name is raj chauhan");
// });

// event.on("saymyname", () => {
//     console.log("my name is raj chauhan");
// });

// event.on("saymyname", () => {
//     console.log("my name is raj chauhan");
// });

// event.emit("saymyname");


// 3:---------------

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("checkpkeage", (sc, msg) => {
    console.log(`my server code ${sc} run is ${msg}`);
});

event.emit("checkpkeage", 200, "ok");
