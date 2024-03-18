// var deepEqual = require('deepEqual');
// function equal(a, b) {
//   return a == b;
// }
// var expected = equal(2, 2);

// const { error } = require("console")

// deepEqual(expected == true, "TWO VALUE EUQAL"); 


// ok/ stricequal/fail..etc:-----------------------------------------------------
// const assert = require('assert');

// function equal(a, b) {
//   return a === b;var assert = require('assert');

// function add(a, b) {
//   return a + b
// }
// var expected = add(1, 3);
// assert(expected = 4, "one and three equal to four");
// console.log("one and three equal to four")
// }
// const expected = equal(2, 2);
// assert.strictEqual(expected, true, "TWO VALUES EQUAL");
// assert.ok(expected, "TWO VALUES EQUAL");
// console.log("done");


// # doesnotstrict:-----------------------------------------------------------
// const assert = require('assert');

// function equal(a, b) {
//   return a === b;
// }

// const expected = equal(2, 2);
// assert.strictEqual(expected, true, "TWO VALUES EQUAL");
// assert.doesNotThrow((equal) => { assert.strictEqual(expected, true); }, undefined, "TWO VALUES EQUAL");
// console.log("done");



const assert = require('assert');

assert.throws(
  function () {
    throw new Error("wrong it is");
  },
  Error
);

