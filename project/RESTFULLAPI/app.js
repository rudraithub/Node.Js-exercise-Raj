const express = require("express");
const _database = require("./db/conn")
const app = express();
const Signup = require('./model/detalis');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const generateToken = require("./utilts/genrateToken");
const verifyToken = require('./middleware/auth');
const port = process.env.PORT || 3001;


app.use(express.json());

app.post("/study", async (req, res) => {
    try {
        const user = new Signup(req.body)
        const nameuser = await user.save();
        res.status(201).send(nameuser);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Signup.findOne({ email });
        if (!user) {
            return res.status(400).send("Invalid email");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send("Invalid password");
        }
        const token = generateToken(user._id);
        user.tokens = user.tokens.concat({ token });
        await user.save()
        console.log(token);

        res.send({ token });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/web", verifyToken, async (req, res) => {
    try {
        const _id = req.user._id
        // const isValidObjectId = mongoose.isValidObjectId(_id);
        // if (!isValidObjectId) {
        //     return res.status(400).json({ error: 'Invalid user ID' });
        // }

        const nameuser = await Signup.findById(_id);
        if (!nameuser) {
            throw new Error('User not found');
        }
        res.send(nameuser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(port, () => {
    console.log("Server is running on port", port);
});




