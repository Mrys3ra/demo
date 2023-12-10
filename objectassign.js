//objectassign
let target = { a: 1, b: 2 };
let source = { b: 3, c: 4 };

let result = Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 3, c: 4 }
console.log(result); // Output: { a: 1, b: 3, c: 4 }
