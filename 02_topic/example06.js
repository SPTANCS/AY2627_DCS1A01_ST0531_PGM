console.clear();

function calculateAreaCircle(radius) {
  return Math.PI * radius * radius;
}

const radius1 = 4;
const radius2 = 6;
const radius3 = 8;

let area1 = calculateAreaCircle(radius1);
let area2 = calculateAreaCircle(radius2);

console.log(`Area of circle with radius ${radius1} is ${area1}`);
console.log(`Area of circle with radius ${radius2} is ${area2}`);

console.log("Area of circle with radius " + radius3 + " is " + calculateAreaCircle(radius3));

//console.log(`Area of circle with radius ${radius3} is ${calculateAreaCircle(radius3)}`);

