// 22. filter method
// /*

// the filter method creates a new array filled with elements that passa test (a condition you define in a function)

// it does not change the original array
//  */

//Ex1:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr1 = arr.filter((x) => x > 5);

// function test(x) {
//     return x > 0;
// }
console.log(arr1);

//Ex2:

let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 1000, 10];
let arr3 = arr2.filter((x) => x > 30);

console.log(arr3);

//Ex3:

let classRoom = [
  {
    fname: "saboor",
    age: 81,
    college: "MJ",
  },
  {
    fname: "ibrahim",
    age: 21,
    college: "LRDS",
  },
  {
    fname: "kaif",
    age: 41,
    college: "drop",
  },
  {
    fname: " malik",
    age: 21,
    college: "drop",
  },
];

let output1 = classRoom.filter((a) => a.age < 40);
console.log(output1);
