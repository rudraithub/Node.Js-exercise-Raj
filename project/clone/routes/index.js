var express = require('express');
var router = express.Router();
const usermodel = require("./users");

router.get('/', function (req, res) {
  res.render("index");
});

router.get('/create', async function (req, res) {
  const createuser = await usermodel.create({
    username: "Raj_112",
    name: "RAJ",
    age: 21
  });
  res.send(createuser);
});

// router.get("/delete", async function (req, res) {
//   let deleteduser = await usermodel.findOneAndDelete({
//     username: "Raj_112"
//   });
//   res.send(deleteduser);
// });

// router.get("/users", async function (req, res) {
//   let all = await usermodel.find()
//   res.send(all);
// });

module.exports = router;
