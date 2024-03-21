const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection is successful");
}).catch((err) => {
    console.error("Connection failed:", err);
});