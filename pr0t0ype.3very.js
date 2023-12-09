let numbers = [1, 2, 3, 4, 5];

// Check if all elements are less than 10
let allLessThanTen = numbers.every(function(element) {
  return element > 10;
});

console.log(allLessThanTen); // Output: true (all elements are less than 10)
