========> PINTEREST <=======

/route me signin and login.
/ profile me apako apaki profile dikhegi and and save post dekhege.and uploaded section hpga jo abhi nahi bana rahe.
/feed par sari image dikhegi.
/click kaarke image open ho jayegi and save kar sakate ho.
/board/: boardname pura board dikhega 

pages:-                                          

1.login screen register
2.profile
3.pins
4.feeds
5.save pins
6.board creation
7.logout
8.protected routes


post in image,caption
multer in image, captions
npm i uuid multer means uuid is a unique name male chhe. ex.facebook in post image download and you see download image name is very different and ocowrds.and multer is a image upload 



The .register method used in this code is provided by the passport-local-mongoose plugin. This plugin extends the functionality of Mongoose models to handle user authentication and registration with Passport.js in Node.js applications.

User Registration: It takes a new user object (in this case, userData) and a password as arguments. It hashes the password and saves the user data, including the hashed password, to the MongoDB database. This method simplifies the process of user registration by automatically handling password hashing and database interaction.

Promise-based: The .register method returns a promise that resolves when the user registration is successful and rejects if an error occurs during the registration process.

Usage: In the provided code, userModel.register(userData, req.body.password) is used to register a new user with the provided user data (username, full name, email) and password submitted through the registration form.

Error Handling: If an error occurs during the registration process (e.g., if the username or email is already in use), the promise is rejected, and the .catch block is executed to handle the error. In the error handling block, an error message is logged to the console, and a flash message is stored using req.flash to indicate the registration error. Finally, the user is redirected back to the homepage ("/") to display the error message or handle the error further.

mongodb
mongoose
mongosh
https://images.pexels.com/photos/2800552/pexels-photo-2800552.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load