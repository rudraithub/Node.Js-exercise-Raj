

// app.post("/study", async (req, res) => {
//     try {
//         const user = new Signup(req.body)
//         const nameuser = await user.save();
//         res.status(201).send(nameuser);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });

// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await Signup.findOne({ email });
//         if (!user) {
//             return res.status(400).send("Invalid email");
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).send("Invalid password");
//         }
//         const token = generateToken({ userId: user._id });
//         res.send({ token }); // Send the token in response
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// app.listen(port, () => {
//     console.log("Server is running on port", port);
// });
