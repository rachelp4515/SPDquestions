// 1394. Find Lucky Integer in an Array


// DESCRIPTION

// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

 

// Example 1:

// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:

// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
// Example 3:

// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.


// PSEUDO CODE

// - create a histogram of the array
// - make a new array of nums that that equal the amount they appear 
// - if there are no lucky nums, return -1. else, return the highest num in the new array

function findLucky(arr) {
    const hist = {};
    const length = arr.length;
    for(let i = 0; i < length; i++){
        if(hist[arr[i]]){
            hist[arr[i]] += 1;
        }else{
            hist[arr[i]] = 1; 
        }
    }
    let newArr = Object.keys(hist).filter((element) => element == hist[element]);

    if (newArr.length === 0 ){
        return -1;
    } else {
    return Math.max(...newArr)
    }  
};