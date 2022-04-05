// 263. Ugly Number
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.


// ex1
// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3


// ex2
// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.


// ex3
// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.


// PSEUDO CODE

// - check if n < 1,return false if it is
// - while n > 1, if 2 mod 2, 3, or 5 equal 0
// return false. otherwise true. 

var isUgly = function(n) {
    if (n < 1) {
      return false;
    }
  
    while (n > 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else if (n % 3 === 0) {
        n = n / 3;
      } else if (n % 5 === 0) {
        n = n / 5;
      } else {
        return false;
      }
    }
  
    return true;
  };