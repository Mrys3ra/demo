//prototypefilter
let numbers = [1, 2, 3, 4, 5, 6];

// Filter elements greater than 3
let greaterThanThree = numbers.filter(function(element) {
  return element > 3;
});

console.log(greaterThanThree); // Output: [4, 5, 6]
