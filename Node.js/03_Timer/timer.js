// # Timer function 
//   const myFunction = (firstParam, secondParam) => {
//     // do something with firstParam and secondParam
//     console.log(firstParam, secondParam);
//   };
  
//   // values for firstParam and secondParam
//   const firstParamValue = "Hello";
//   const secondParamValue = "World";
  
//   // runs after 2 seconds
//   setTimeout(myFunction, 2000, firstParamValue, secondParamValue);
  

// # TIMER FUNCTIONS
//  let myfunction = (delay)=>{
//     console.log("hello " + delay + " second");
//  }

//  setTimeout(myfunction, 5*1000, " five");
//  setTimeout(myfunction, 10*1000," ten");


// setInterval(() => {
//     console.log ("helllo world", )

// }, 4000);



// clear timeout

// let myname = ()=>{
//     console.log(" hello world ")
// }

// let timerid= setTimeout(myname, 5000);
// setTimeout(myname,10000);

// clearTimeout(timerid);

// let timer = setImmediate(myname);
// clearImmediate(timer);

// let timer = setInterval(myname);
// clearInterval(timer)






// # imp exm..
let counter = 0;

let myfunction = ()=>{
    console.log("Hello ,Raj chuauhan");
    counter += 1;


    if (counter=== 5 ){
        console.log("complete");
        clearInterval(timerid);
    }
};

let timerid  = setInterval(myfunction,2000);