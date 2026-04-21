// example03.js

// Get arguments from the command line
const args = process.argv.slice(2); // skip 'node' and the filename

if (args.length !== 2) {
  console.log('Please provide exactly two numbers.');
  process.exit(1);
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

// Check if the inputs are valid numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log('Both arguments must be valid numbers.');
  process.exit(1);
}

const sum = num1 + num2;
console.log(`Result: ${sum}`);
