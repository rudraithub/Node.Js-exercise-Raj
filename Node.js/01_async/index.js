const { Console } = require("console");
const fs = require("fs")

// ex-1

// fs.writeFile("write.txt","I am right learn file module",(err)=>{
//     console.log("write");
// });

// ex-2

// fs.appendFile("write.txt","  I AM APPEND DATA IN WRITE FILE",(err)=>{
//     console.log("creat file ");
// })

// ex-3

// fs.readFile("write.txt",'utf-8',(err,data)=>{
//     console.log(err);
// })

// ex-4

// fs.unlink("write.txt",(err)=>{
//     console.log(err);
// })

// ex-5

fs.rmdir("./npmMod", (err) => {
    console.log("folder deleted");
});

