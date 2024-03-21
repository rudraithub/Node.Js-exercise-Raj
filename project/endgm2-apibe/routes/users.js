const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Endgame2");

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: [String],
  datecreated: {
    type: Date,
    default: Date.now
  }
});

// Plugin passport-local-mongoose to enable authentication methods
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
