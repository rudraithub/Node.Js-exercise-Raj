const express = require("express");
const router = express.Router();
const Profile = require('../model/detalis');

// router.get("/registration", (req, res) => {
//     res.send("server is running");
// });

router.post("/signup", (req, res) => {
    console.log(req.body);
    const user = new Profile(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
});

module.exports = router;
