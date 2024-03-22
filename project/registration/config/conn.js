const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/api", {
}).then(() => {
    console.log("Connection is successful");
}).catch((err) => {
    console.error("Connection failed:", err);
});