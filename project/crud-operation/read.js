// // Import the MongoClient class from the MongoDB Node.js driver
// const MongoClient = require('mongodb').MongoClient;

// // Connection URL
// const url = 'mongodb://localhost:27017/myconnections';

// // Database Name
// const dbName = 'myconnections';

// // Use MongoClient to connect to the MongoDB server
// MongoClient.connect(url, function (err, client) {
//     // Handle errors
//     if (err) {
//         console.error('Failed to connect to MongoDB:', err);
//         return;
//     } var MongoClient = require('mongodb').MongoClient;
//     //Create a database named "mydb":
//     var url = "mongodb://localhost:27017/mydb";

//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         console.log("Database created!");
//         db.close();
//     });


//     // Connected successfully
//     console.log('Connected to MongoDB server');

//     // // Create a new database
//     const db = client.db(clone);

//     // Log a message indicating that the database was created
//     console.log('Database created:', clone);

//     // Close the connection
//     client.close();
// });


var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});
