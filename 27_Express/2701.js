// ## 2701 - write a program for create a server using express.

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello, World!');
});


const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
