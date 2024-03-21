const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const generateToken = require("../utilts/genrateToken")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("invalid password")
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

// To generate the hashed password:
studentSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

const Signup = mongoose.model("Signup", studentSchema)

module.exports = Signup;
