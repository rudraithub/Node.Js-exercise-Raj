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