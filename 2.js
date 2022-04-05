// 2160. Minimum Sum of Four Digit Number After Splitting Digits

// DESCRIPTION
// You are given a positive integer num consisting of exactly four digits. 
// Split num into two new integers new1 and new2 by using the digits found in num. 
// Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3.
//  Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.

// EXAMPLE 1 
// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

// EXAMPLE 2 

// Input: num = 4009
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. 
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.


// PSEUDO CODE

// make a sorted array out of the numbers passed
// take the 0th and 3rd item of the array, make that a new number, do the same with the 1st and last
// return the sum of the two new numbers




function minimumSum(num){
   let arr = [];
   arr = String(num).split('').map(Number).sort();
   const first = (arr[0] * 10) + arr[3];
   const second = (arr[1] * 10) + arr[2];
   return first + second
 }

console.log(minimumSum(4009))