// let name=["nam","gam","cham"];
// for(i=0; i<name.length; i++){
// console.log(name)
// }



// # array method   
// let a = [1, 2, 23, 34];
// let result = a.toString()
// console.log(result,typeof result)

// let b = a.join("_")
// console.log(b)

// let c = a.pop()
// console.log(a,c)

// let d = a.push(45)
// console.log(a, d)

// let f= a.shift()
// console.log(a,f)

// let e = a.unshift(1 )
// console.log(e,a)

// # sort method 
// let num =[1,2,3,23,43,76,566]
// let g = num.sort()
// console.log(g)


// let compare = (a, b) => {
//     return (a - b)
// }
// let num1 = [1, 53, 893, 99, 56, 226, 3, 2, 0, 3, 4, 5, 22.24, 25, 6]
// num1.sort(compare)
// console.log(num1)

// num1.splice(2, 7, 100, 2342, 1000, 12345)
// console.log(num1)

// let num2 = num1.slice(4)
// console.log(num2)


// let nu= [1,2,344,32,3,32,43,44];
// for (let i = 0; i < nu.length; i++){
//     // console.log(nu[i]);
// }

// let nu= [1,2,344,32,3,32,43,44]

// for(let i in nu){
//     console.log(i)
// }



// nu.forEach((element)=>{
//  console.log(element*element)   
// })  

// let name = "Raj chauhan";
// let f = Array.from(name)
// console.log(f)

// # map method 

// let nam = [1,2,23,,21,1212,133,213]
// let a =nam.map((value,index,Array)=>{
// console.log(value,index,Array)
// })


// #FILTER METHOD 


// let arr = [1,2,3,4,4,545,54,4,5,6]
// let aru = arr.filter((a)=>{
//    return a<10
// })
// console.log(aru)


// # reduces method 

let arr1 = [1, 2, 3, 4, 4,]
let reduce_fun = (h1, h2) => {
    return h1 + h2
}
let arr4 = arr1.reduce(reduce_fun)
console.log(arr4)

function twoSum(nums, target) {
    // Create an empty object to store the indices of numbers as keys
    const numIndices = {};

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number needed to reach the target
        const complement = target - nums[i];

        // Check if the complement exists in the numIndices object
        if (numIndices[complement] !== undefined) {
            // Return the indices of the current number and its complement
            return [numIndices[complement], i];
        }

        // Store the current number's index in the numIndices object
        numIndices[nums[i]] = i;
    }

    //     // Return an empty array if no such pair exists
    return [];
}

// // Test the function
// const nums = [3, 2, 4];
// const target = 6;
// console.log(twoSum(nums, target));

// flate:- 


let a = [a, b[c, d[e, f]]];
console.log(a.flat(Infinity));

input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]