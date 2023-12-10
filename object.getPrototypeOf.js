//object.getPrototypeOf
// Creating an object and specifying its prototype
let animal = {
  type: 'Mammal'
};

let dog = {
  breed: 'Labrador'
};

// Setting 'animal' as the prototype of 'dog'
Object.setPrototypeOf(dog, animal);

// Getting the prototype of 'dog'
let prototypeOfDog = Object.getPrototypeOf(dog);
console.log(prototypeOfDog); // Output: { type: 'Mammal' }
