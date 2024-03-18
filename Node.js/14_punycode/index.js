// Include punycode module
// const punycode = require('punycode');

// Decode Punycode strings of ASCII
// // to Unicode symbols
// console.log(punycode.decode('manama-pta'));
// console.log(punycode.decode('--dqo34k'));

//  example-1 


// Include punycode module
// const punycode = require('punycode');

// console.log(punycode.toUnicode('xn--maana-pta.com'));
// console.log(punycode.toUnicode('xn----dqo34k.com'));

// example-2 

const punycode = require('punycode');

// Encode a Unicode string to Punycode
const encoded = punycode.toASCII('rajchauhan.com');
console.log(encoded); // xn--example.com

// Decode a Punycode string to Unicode
const decoded = punycode.toUnicode('xn--rajchauhan.com');
console.log(decoded);


// example-3:-------------------------------------------------------------------------


// => We use the readline module to prompt the user to enter a domain name in Unicode.
// => Once the user inputs the domain name, we use punycode.toASCII() to convert it to Punycode.
// => We log the Punycode representation of the domain name.
// => Then, we use punycode.toUnicode() to convert the Punycode back to Unicode.
// => Finally, we log the decoded domain name.

const punycode = require('punycode');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a domain name in Unicode: ', (domain) => {
    // Encode the Unicode domain name to Punycode
    const punycodeDomain = punycode.toASCII(domain);
    console.log(`Punycode representation: ${punycodeDomain}`);

    // Decode the Punycode domain name back to Unicode
    const decodedDomain = punycode.toUnicode(punycodeDomain);
    console.log(`Decoded back to Unicode: ${decodedDomain}`);

    rl.close();
});

