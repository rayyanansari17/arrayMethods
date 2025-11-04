//every() method

/* checks if every element in the array passes a test (return true/ false).

returns: true if all elements pass the condition, otherwise false 

*/

let nums = [2, 4, 6, 8];

let check = nums.every((x) => x > 0);

// function test(x) {
//     return x > 0;
// }
console.log(check);

// return the output value in boolean form
