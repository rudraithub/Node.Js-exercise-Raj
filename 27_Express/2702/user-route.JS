const express = require('express');
const app = express();

// Import the router
const router = require('./router');

// Mount the router at a specific path
app.use('/', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
