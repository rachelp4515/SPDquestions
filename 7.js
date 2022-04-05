// 1200. Minimum Absolute Difference

// DESCRIPTION

// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr
 

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]



// PSEUDO CODE

// Sort the original array
// Initialize minimum difference as a huge integer in order not 
// to miss the absolute difference of the first pair. 
// Traverse the sorted array and calcalute the minimum absolute difference.
// Traverse the sorted array and check every pair again, if 
// the absolute difference equals the minimum difference, 
// add this pair to the answer list.



var minimumAbsDifference = function(arr) {
    arr.sort((x, y) => x - y);
    let answer = [];
    let minPairDiff = Infinity;

    for (let i = 0; i < arr.length - 1; ++i) {
        minPairDiff = Math.min(minPairDiff, arr[i + 1] - arr[i]);
    }
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i + 1] - arr[i] == minPairDiff) {
            answer.push([arr[i], arr[i + 1]]);
        }
    }

    return answer;
};
