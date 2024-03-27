// Import required modules
const express = require('express');

// Create a router instance
const router = express.Router();

// Define routes
router.get('/home', (req, res) => {
    res.send('Hello from Express server!');
});

router.get('/about', (req, res) => {
    res.send('About page');
});

router.get('/contact', (req, res) => {
    res.send('Contact page');
});

// Export the router
module.exports = router;
