// ## async example


// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 5000);


// console.log("one");
// console.log("two ");


// setTimeout(()=> {
//     console.log("hello");
// },4000); //timeout 

// console.log("three");
// console.log("four");


// #call back :- One funcation in other funcation ues its called callback funcation.

// function sum (a,b){
//     console.log (a+b);
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b);

// }
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// });



// callback hell :-  It is a nested means one in deeping inside one in one in it's called callback hell.

// let age = 18;
// if (age>=18){
//     if(age>=60){
//         console.log("senior");
//     }else{
//         console.log("middel");
//     }
//     }else{
//         console.log("kidds")
//     }


// function getdata(dataID, getNextData) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataID);
//             resolve("success")
//             if (getNextData){
//                 getNextData();
//             }
//         }, 4000);
//     });
 
//     }
        


// promises chain:------------
// console.log("waiting data facthing.....")
// let p1 = getdata(1);
// p1.then((res)=>{
//     console.log(res)
//     console.log("waiting data facthing -1....")
//     let p2 = getdata(2);
//     p2.then((res)=>{
//         console.log(res)

//     });
// });


// getdata(1)
// .then((res)=>{
//     return getdata(2)

// })
// .then((res)=>{
//     return getdata(3)
// }).then((res)=>{
//     console.log("successfully data print",res )
// })

//  // callback hell :-------------------

// getdata(1, () => {
//     console.log("waiting data 2")
//     getdata(2, () => {
//         console.log("waiting data 3")
//     }); 

// });


//

// #promises:--------

// let myPromise = new Promise((resolve, reject) => {
//     console.log("I AM HAPPY ");
//     reject("some issues in your code");
// });


// //# promises chian:----------

// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("some data")
//            resolve("success");
//         // reject("some error in yor program")
//         },4000);
//     });

// }


// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("some data1")
//            resolve("success");
//         // reject("some error in yor program")
//         },4000);
//     });

// }



// console.log("fetching data......")
// asyncFunc().then((res)=>{
//     console.log(res);
//     console.log("fetching data1..........");
//     asyncFunc1().then((res)=>{
//         // p1.catch((err)=>{
//             console.log(res);
//         })

// })

// //  Async-Await

// async function myfunc(hello){
//     console.log(hello)

// }

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weater data me ");
            resolve(200);
           },2000);
    });  
}

async function getweatherdata(){
    await api();
    console.log("waiting...")
    await api();
    console.log("waiting......")

    await api();
    console.log("waiting............")
    
    

}


