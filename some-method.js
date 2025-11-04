// 24.some() method

/*
the some() method checks if at least one element in an array psses a test (condition). 
it returns :
true -> if any element passes the condition 

false -> if none do 

*/

let arr1 = [2, 4, 6, 8, 11];
let output = arr1.every((x) => x % 2 == 0);
let output1 = arr1.some((x) => x % 2 == 0);

console.log(output);
console.log(output1);
