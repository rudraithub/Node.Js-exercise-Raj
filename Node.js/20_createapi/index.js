
const express = require("express");
require("./db/conn");
const student = require("./models/student");
const Student = require("./models/student");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// cont userRouter = express.Router()
// create a new student:-

app.post("/student", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
