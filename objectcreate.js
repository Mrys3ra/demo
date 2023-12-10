//objectcreate
// Creating a person object prototype
let personProto = {
  greet: function() {
    return `Hello, ${this.name}!`;
  }
};

// Creating a new object 'alice' with 'personProto' as its prototype
let alice = Object.create(personProto);
alice.name = 'Alice';

console.log(alice.greet()); // Output: 'Hello, Alice!'
