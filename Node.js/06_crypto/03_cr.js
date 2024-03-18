const bcrypt = require('bcrypt');
debugger;

// Example data
const plaintextPassword = 'mySecurePassword';


const saltRounds = 10;
bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    throw err;
  }

  // Hash the password with the generated salt
  bcrypt.hash(plaintextPassword, salt, (err, hash) => {
    if (err) {
      throw err;
    }

    // Display the hashed password
    console.log(`Original Password: ${plaintextPassword}`);
    console.log(`Hashed Password: ${hash}`);
  });
});
