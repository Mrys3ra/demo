//protoypesom
let numbers = [1, 2, 3, 4, 5];

// Check if at least one element is greater than 3
let anyGreaterThanThree = numbers.some(function(element) {
  return element > 3;
});

console.log(anyGreaterThanThree); // Output: true (at least one element is greater than 3)
