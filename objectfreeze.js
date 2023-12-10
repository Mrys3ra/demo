//objectfreeze
let obj = {
  property1: 42,
  property2: 'Hello'
};

Object.freeze(obj);

// Trying to modify the object after freezing it
obj.property1 = 100; // This change will not take effect
delete obj.property2; // This won't delete the property

console.log(obj); // Output: { property1: 42, property2: 'Hello' }
