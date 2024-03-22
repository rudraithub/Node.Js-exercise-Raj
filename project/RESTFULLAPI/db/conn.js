const mongoose = require('mongoose');

// Set strictQuery to suppress the deprecation warning
mongoose.set('strictQuery', true);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error('Error connecting to MongoDB:', err));
