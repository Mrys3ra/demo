//prototypemap
let numbers = [1, 2, 3, 4, 5];

// Map each element to its square
let squaredNumbers = numbers.map(function(element) {
  return element * element;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
