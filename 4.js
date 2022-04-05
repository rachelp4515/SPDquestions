// 434. Number of Segments in a String

//  description

// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

// ex1
// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// ex2
// Input: s = "Hello"
// Output: 1




// record the amount of spaces in the string, add one

function segments(string){
    console.log(((string.match(/ /g) || []).length) + 1)
}
segments('hi im mark, and i like cheese')


