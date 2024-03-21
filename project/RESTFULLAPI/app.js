const express = require("express");
require("./db/conn");
const app = express();
const Signup = require('./model/detalis'); 
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const generateToken = require("./utilts/genrateToken");
const verifyToken = require('./middleware/auth');
const port = process.env.PORT || 3001;


app.use(express.json());

app.post("/study", async (req, res) => {
    try {
        const user = new Signup(req.body)
        const nameuser = await user.save();
        res.status(201).send(nameuser);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.post("/login", async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await Signup.findOne({ email });
        if (!user) {
            return res.status(400).send("Invalid email");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send("Invalid password");
        }
        const token = generateToken(user._id);
        user.tokens = user.tokens.concat({ token });
        await user.save()
        console.log(token);
        res.send({ token});
    } catch (error) {   
        res.status(500).send(error.message);
    }
});

app.get("/web", verifyToken, async (req, res) => {
    try {
        const _id = req.user._id
        // const isValidObjectId = mongoose.isValidObjectId(_id);
        // if (!isValidObjectId) {
        //     return res.status(400).json({ error: 'Invalid user ID' });
        // }
        
        const nameuser = await Signup.findById(_id);
        if (!nameuser) {
            throw new Error('User not found');
        }
        res.send(nameuser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(port, () => {
    console.log("Server is running on port", port);
});


// app.post("/study", (genrateTokenreq, res) => {
//     const user = new Signup(req.body)
//     console.log(req.body)
//     user.save().then(() => {
//         res.send(user)

//     }).catch((e) => { 'secretkey'
//         res.send(e)
//     })
// })

// app.post("/study", agenrateTokensync (req, res) => {
//     try {
//         const user = new Signup(req.body)
//         const nameuser = await user.save();
//         res.status(201).send(nameuser);

//     } catch (err) {
//         res.status(400).send(err);app.post("/study", async (req, res) => {
//             try {
//                 const user = new Signup(req.body)
//                 const nameuser = await user.save();
//                 res.status(201).send(nameuser);
        
//             } catch (err) {
//                 res.status(400).send(err);
//             }
        
        
//         })
        
//     }


// })



// app.get("/proflie/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         console.log(_id); 'secretkey'
//         const nameuser = await Signup.findById(_id);
//         console.log(nameuser);
//         if (!nameuser) {
//             throw new Error('user notfound')
//         }
//         res.send(namgenrateToken

// })

// app.post("/login", async fpayloadunction (req, res) {
//     try {

//         const { email, password } = req.body;

//         const user1 genrateToken= await Signup.findOne({  'secretkey'email });
//         console.log(user1);
//         if (!user1) {
//             return res.status(400).send("Invalid email");

//         }

//         const Match = await bcrypt.compare(password, user1.password);
//         if (!Match) {
//             return rgenrateTokenes.status(400).send("Invalid password")
//         }
//         const token = jwt.sign({ userId: user._id }, 'secretkey', {
//         });

//         // res.send("YOUR PROFLIE SUCCESSFULL LOGIN");
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// app.listen(port, () => {
//     console.log("connection is successful")
// })

// app.post("/token", verifyToken, (req, res) => {
//     jwt.verify(req.webt, secreteKey, (err, authoData) => {
//         if (err) {
//             res.send({ result: "invalid token" })
//         } else {
//             res.json({
//                 message: "YOUR PROFILE ACCESSED",
//                 authoData
//             })
//         }
//     })

// })

// function verifyToken(req, res, next) {
//     const bearerheader = req.headers['authorization']
//     if (typeof bearerheader !== 'undefined') {
//         const BEARER = bearerheader.split(" ");
//         const webt = BEARER[1];
//         console.log(webt);
//         req.webt = webt;
//         next();

//     } else {
//         res.send({
//             result: "TOKEN  IS NOT A VALID"
//         })
//     }
// }

// app.post("/login", async function (req, res) {
//     try {
//         const { email, password } = req.body;

//         // Check if the user with the provided email exists
//         const user = await Signup.findOne({ email });

//         if (!user) {
//             // User with the provided email does not exist
//             return res.status(400).send("Invalid email");
//         }

//         // Here you should compare the password provided by the user with the hashed password stored in the database
//         // Since you are not using password hashing in this code, I'll leave the comparison for demonstration purposes only
//         if (user.password !== password) {
//             // Password does not match
//             return res.status(400).send("Invalid password");
//         }

//         // If email and password are correct, send a success message
//         res.send("YOUR PROFILE SUCCESSFULLY LOGIN");
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

