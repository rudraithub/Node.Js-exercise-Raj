const express = require("express");
const app = express();
const router = require("./router/sign");
require("./config/conn");


const port = process.env.PORT || 8000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
