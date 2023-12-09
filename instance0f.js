class Animal {}

class Dog extends Animal {}

let dog = new Dog();

console.log(dog instanceof Dog); // Output: true - 'dog' is an instance of Dog
console.log(dog instanceof Animal); // Output: true - 'dog' is also an instance of Animal
console.log(dog instanceof Object); // Output: true - 'dog' is an instance of Object (since all objects inherit from Object)
