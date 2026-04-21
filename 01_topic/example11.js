let x = 1;
let y = true;

console.clear();

console.log(`x is ${typeof x} with value ${x}`);
console.log(`y is ${typeof y} with value ${y}`);

let result1 = (x == y); // using ==
let result2 = (x === y); // using ===

console.log(`result of x == y is ${result1}`);
console.log(`result of x === y is ${result2}`);
