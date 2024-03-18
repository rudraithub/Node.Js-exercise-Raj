// Importing the crypto module
const crypto = require("crypto-js")
const data = "raj chauhan"
const key = "password@971"

// Encrypte the data
const encrypted = crypto.AES.encrypt(data, key).toString();
console.log("Encrypted data")

// Printing the encrypted data
console.log(encrypted)
console.log("Decrypted data")

// Decrypting the data
const decrypted = crypto.AES.decrypt(encrypted, key)
    .toString(crypto.enc.Utf8)
console.log(decrypted)