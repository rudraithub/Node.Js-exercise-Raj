var express = require('express');
var router = express.Router();
const userModel = require("./users")
const passport = require('passport');

const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function (req, res) {
  res.render('index');
});

router.get("/create", async function (req, res) {
  let userdata = await userModel.create({
    username: "DABHI ",
    nickname: "KARTIK",
    description: "I LOVE JAVASCRIPT, RIGHT NOW I LEARN NODE.JS.",
    categories: ["FULTTER", "C++", "MONGODB"]
  })
  res.send(userdata);
});

// Specific length in mongoose find 
router.get("/FIND", async function (req, res) {
  let user = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: '$nickname' }, 0] },
        { $lte: [{ $strLenCP: '$nickname' }, 12] }
      ]
    }
  });
  res.send(user);
});

router.get('/profile', isLoggedIn, function (req, res) {
  res.render('profile');
});

router.post('/register', function (req, res) {
  var userData = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });

  userModel.register(userData, req.body.password)
    .then(function (registeredUser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect('/profile');
      });
    })
    .catch(function (err) {
      // Handle registration error
      console.error("Registration error:", err);
      res.status(500).send("Error registering user.");
    });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}), function (req, res) { })

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("/");
  })

});

function isLoggedIn(req, res, next) {  // this line means app loggedin ho 
  if (req.isAuthenticated()) { //agar app loggin ho 
    return next(); //To age bado 
  }
  res.redirect("/"); // nahi ho slash route me jav  
}

module.exports = router;
