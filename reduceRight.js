// reduceRight

// reduce the array/add the array elements from right to left

let word = ["h", "e", "l", "l"];
let str = word.reduceRight((a, b) => {
  return a + b;
});
console.log(str);
