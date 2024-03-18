
const path = require("path");

console.log(path.dirname("/home/rih005/Raj/node/pathmodule/path.js"));
console.log(path.extname("/home/rih005/Raj/node/pathmodule/path.js"));
console.log(path.basename("/home/rih005/Raj/node/pathmodule/path.js"));
console.log(path.parse("/home/rih005/Raj/node/pathmodule/path.js"));

const mypth = path.parse("/home/rih005/Raj/node/pathmodule/path.js");
console.log(mypth.root)
// console.log(path.dirname("/home/rih005/Raj/node/pathmodule/path.js"));
