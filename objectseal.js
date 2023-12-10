//objectseal
let obj = {
  property1: 42,
  property2: 'Hello'
};

Object.seal(obj);

// Trying to modify and add properties after sealing the object
obj.property1 = 100; // Allowed
obj.property3 = 'New value'; // Not allowed, won't add a new property
delete obj.property2; // Not allowed, won't delete the property

console.log(obj); // Output: { property1: 100, property2: 'Hello' }
