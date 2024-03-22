const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/pinterest")
const plm = require("passport-local-mongoose");
const { array } = require('./multer');

const Schema = mongoose.Schema;



const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],
  dp: {
    type: String,
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  board: {
    type: String,
    require: true
  }
});

userSchema.plugin(plm); //It applies the passport-local-mongoose plugin to the schema. 
// This plugin simplifies building username and password login with Passport.js for Mongoose models.

const User = mongoose.model('User', userSchema);

module.exports = User;
