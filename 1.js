// DESCRIPTION: Given an array nums. We define a running sum of an array as 
// runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// INPUT: Input: nums = [1,2,3,4]
// OUTPUT: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// PSEUDO CODE

// for every item in the list, if its the first item then leave it, else, 
// add the value of the item before the current one to the current one, and return the new list

const runningSum = function(nums) {
    return nums.reduce((red, cur, i) => {
        red.push(i == 0? cur : cur + red[i - 1]) 
        return red
    },[])
}

runningSum([1,2,3,4])