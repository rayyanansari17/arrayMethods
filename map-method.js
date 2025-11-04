// 21. map() method

// /*
// map method transforms each element and return a new array
// return vale : new array

// chainable : yes
// changes original : yes
// common use case : creating new arrays

// ex: creats a new array with modified values and return in a new array by default

// */

let num = [1, 2, 3, 4, 5];
console.log(num);

let final = num.map((x) => x * 2);
console.log(final);
console.log(num);
