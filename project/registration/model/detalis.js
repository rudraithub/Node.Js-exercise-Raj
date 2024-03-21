const mongoose = require("mongoose");
const validator = require("validator");

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        Validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email")
            }
        }
    },
    password: {
        type: String,
        required: true,
        unique: true,
        Validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("invalid email")
            }
        }
    }
});

const Profile = mongoose.model("Profile", registerSchema);

module.exports = Profile;
