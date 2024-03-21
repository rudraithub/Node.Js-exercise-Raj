const jwt = require('jsonwebtoken');
const Signup = require('../model/detalis');

async function verifyToken(req, res, next) {
    const token = req.header('authorization').replace('Bearer ', '')
    console.log(token);
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(token, "defaultSecretKey");
        console.log(decoded);
        const user = await Signup.findOne({ _id: decoded.userId, 'tokens.token': token })
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
}

module.exports = verifyToken;
