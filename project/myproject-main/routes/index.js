var express = require('express');
var router = express.Router();
const userMOdel = require("./users");
const postModel = require("./post")
const passport = require("passport")
const localStrategy = require("passport-local");
passport.use(new localStrategy(userMOdel.authenticate()));

const upload = require("./multer");


router.use(passport.initialize());
router.use(passport.session());





function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "Please log in to access this page.");
  res.redirect("/");
}

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/login', function (req, res, next) {
  res.render("login", { error: req.flash("error") });
});

router.get('/feed', function (req, res, next) {
  res.render("feed");
});

router.post('/upload', upload.single("file"), isLoggedIn, async function (req, res) {
  // Access upload file details via req.file
  if (!req.file) {
    return res.status(400).send("No file was uploaded.");
  }
  try {
    // Find user based on the username in the session
    const user = await userMOdel.findOne({ username: req.session.passport.user });

    // Check if user exists
    if (!user) {
      return res.status(404).send("User not found.");
    }
    // Create post associated with the user
    const post = await postModel.create({
      image: req.file.filename,
      imageText: req.body.filecaption,
      user: user._id
    });
    // Push the created post's ID to the user's posts array
    user.posts.push(post._id);
    // Save the user object
    await user.save();
    // Send success response
    res.redirect("/profile");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file.");
  }
});

router.get('/profile', isLoggedIn, async function (req, res, next) {
  const user = await userMOdel.findOne({
    username: req.session.passport.user
  })
    .populate("posts")
  console.log(user);
  res.render("profile", { user });
});

router.post('/register', function (req, res, next) {
  const userData = new userMOdel({
    username: req.body.username,
    fullName: req.body.fullName,
    email: req.body.email,
  });
  userMOdel.register(userData, req.body.password)
    .then(function () {
      passport.authenticate("local")(req, res, function () {
        res.redirect('/profile');
      });
    })
    .catch(function (err) {
      console.error("Registration error:", err.message);
      req.flash("error", "Error registering user.");
      res.redirect("/");
    });
});

router.get('/', function (req, res) {
  res.render('pages/auth');
});

router.post('/login', passport.authenticate("local", {
  successRedirect: "/profile",//If authentication is successful, the user is redirected to the "/profile" page.
  failureRedirect: "/login",// If authentication fails (e.g., incorrect username or password), the user is redirected back to the "/login" page.
  failureFlash: true //This option enables flashing of error messages if authentication fails. 
}));

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
})


router.get('/account', (req, res) => {
  res.render('account'); // Render the account.ejs view directly
});


module.exports = function (passport) {
  return router;
}




// router.get('/alluserpost', async function (req, res, next) {
//   let User = await userMOdel
//     .findOne({ _id: "65e942d553d0765686c2c0d7" })
//     .populate('post')
//   res.send(User)
// });

// router.get("/craeteuser", async function (req, res, next) {
//   try {
//     let craeteuser = await userMOdel.create({
//       username: " Dave",
//       password: "smit",
//       post: [],
//       fullName: "Smit Dave ",
//       email: "smit000@gmail.com"
//     })
//     console.log(craeteuser);
//     res.send(craeteuser)
//   } catch (error) {
//     res.send(error)
//   }
// })

// router.get('/createpost', async function (req, res, next) {
//   try {
//     let createpost = await postModel.create({
//       postText: "welcome to my website",
//       userid: "65e942d553d0765686c2c0d7"
//     })
//     let user = await userMOdel.findOne({ _id: "65e942d553d0765686c2c0d7" })
//     user.post.push(createpost._id)
//     await user.save()
//     res.send("done")
//     console.log(createpost)
//   } catch (error) {
//     res.send(error.message)
//   }
// });

module.exports = router;
