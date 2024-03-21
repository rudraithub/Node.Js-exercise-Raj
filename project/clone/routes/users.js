const mongoose = require("mongoose");

// const url = mongoose.connect("mongodb://127.0.0:27017/kuchbhi");

mongoose.connect("mongodb://127.0.0.1:27017/kuchbhi")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
// schema matalb  apako   batana ye ki banane vala har documents me kya kya hoga.

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})



module.exports = mongoose.model("user", userschema);