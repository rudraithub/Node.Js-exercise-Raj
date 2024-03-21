const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");


// console.log(path.extname("hello.pdf"));


const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./public/images/upload") //destination folder for upload  
    },
    filename: function (req, file, cb) {
        const uniquefilename = uuidv4(); //genrating unique file name using uuid
        cb(null, uniquefilename + path.extname(file.originalname)); //use for unique file name for uploaded file
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
