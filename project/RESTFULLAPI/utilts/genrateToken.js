const jwt = require("jsonwebtoken");
const tos = require("../model/detalis");

function generateToken(_id) {
    const secretKey = process.env.JWT_SECRET_KEY || "defaultSecretKey";
    return jwt.sign({ userId: _id }, secretKey);
}

module.exports = generateToken;




// const jwt = require('jsonwebtoken')


// const ganerateAuth = async (id)=> {
//     const token = jwt.sign({id}, "hellomyname")
//     // console.log('Generated Token:', token)
//     return token
// }

// module.exports = { ganerateAuth }