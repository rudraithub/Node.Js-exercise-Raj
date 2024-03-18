//  DNS module :-----------


// const dns = require('dns');  
// dns.lookup('www.javatpoint.com', (err, addresses, family) => {  
//   console.log('addresses:', addresses);  
//   console.log('family:',family);  
// });  

// const dns = require('dns')

import dns from 'dns';

// dns.lookup('geekyshows.com',(error,address,family)=>{
//     if(error) throw error;
//     console.log(address)
//     console.log(family)

// })


dns.resolve('geekyshows.com','MX', (error,recoeds) => {
    if(error) throw error;
    console.log(recoeds);
})