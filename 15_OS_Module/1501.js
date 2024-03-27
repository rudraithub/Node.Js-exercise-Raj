// ## 1501 - write all method of OS module and print data of all methods


const os = require('os');

function printOSInfo() {

    console.log(os.arch());

    console.log(os.cpus());

    console.log(os.totalmem());

    console.log(os.freemem());

    console.log(os.hostname());

    console.log(os.platform());

    console.log(os.release());

    console.log(os.type());

    console.log(os.uptime());

    console.log(os.userInfo());
}


printOSInfo();
