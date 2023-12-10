//objectName.property
var person = {
  name: 'Alice',
  age: 30
};

console.log(person.name); // Output: 'Alice'

//objectName["property"]
var person = {
  name: 'Alice',
  age: 30
};

console.log(person["age"]); // Output: 30

//objectName[expression]
let propertyName = "age";
var person = {
  name: 'Alice',
  age: 30
};

console.log(person[propertyName]); // Output: 30
