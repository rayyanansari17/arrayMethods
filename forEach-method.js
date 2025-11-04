// 20. forEach() method

// purpose : executes a function for each element
// return value : undefined
// chainable : no
// changes original array : no
// common use : logging, saving data

// ex : foreach just : Just loops - doesn't return anything

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.forEach((x) => {
  console.log(x + 5);
});

console.log(numbers);

let names = ["kaif", "saboor", "ibrahim"];

names.forEach((x) => {
  console.log(x);
});
