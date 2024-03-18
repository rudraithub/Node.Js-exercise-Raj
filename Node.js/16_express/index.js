// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// app.listen(3000)

//  middleware 
// const express = require('express')
// const app = express()
// debugger;

// app.use(function (req, res, next) {
//     next();
//     console.log("hello world")

// })
// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// app.get('/profile/:username', function (req, res) {
//     res.send(`Hello india ${req.params.username}`)
// })

// app.listen(3000)

//  EJS :------------------------------------

const express = require('express');
const app = express();

app.set("view engine", "ejs")
app.use(express.static("./public"))

app.get("/", function (req, res) {
    res.render("input");
});

app.listen(3000);
