class Animal {}

class Dog extends Animal {}

class Cat{}

let dog = new Dog();
let cat = new Cat();

console.log(dog instanceof Cat); // Output: false - 'dog' is not an instance of cat
console.log(dog instanceof Animal); // Output: true - 'dog' is also an instance of Animal
console.log(dog instanceof Object);// Output: true - 'dog' is an instance of Object (since all objects inherit from Object)
console.log(cat instanceof Object);// Output: true - 'cat' is an instance of Object (since all objects inherit from Object)
