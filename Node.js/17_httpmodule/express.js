const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello From Hello Page");
});

app.get("/about", (req, res) => {
    const myname = req.query.myname || "Unknown";
    return res.send(`Welcome from about page, ${myname}`);
});

app.listen(8000, () => console.log("Server started"));
