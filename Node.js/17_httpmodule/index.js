// create a new server:------------------------

// const http = require('http')

// const myserver = http.createServer((req, res) => {
//     console.log("New req rec.");
//     res.end("hello! how are you");
// })

// myserver.listen(8000, () => console.log("server wiil be start"));


//   This program is multiple case


const http = require('http');
const fs = require('fs');
const url = require("url")

const myserver = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.method} New request received\n`;
    const myurl = url.parse(req.url, true);
    console.log(myurl);
    fs.appendFile('log.txt', log, (err, data) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });

    switch (myurl.pathname) {
        case '/':
            if (req.method === "GET") res.end("homepage");
            break;
        case '/about':
            const useranme = myurl.query.myname;
            res.end(`welcome my website,${useranme}`);
            break;
        case '/contact-us':
            res.end('jay jay shree ram');
            break;
        case 'signup':
            if (req.method === 'GET') res.end('THIS IS YOUR SIGNUP');
            else (req.method === 'post');
            // DB query 

            res.end("success");
        default:
            res.end("404 not Found");
    }
});

myserver.listen(8000, () => console.log("server started"));
