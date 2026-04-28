const assert = require('assert');
const { getRandomIntInclusive } = require('./code');

console.clear();

let failed = false;

const start = Math.floor(Math.random() * 5);
const end   = Math.floor(Math.random() * 11) + 5;

console.log(`Testing getRandomIntInclusive(${start}, ${end})`)

// Test for getRandomIntInclusive(start, end): ensure all values start-end are generated at least once in 1000 iterations
const generatedValues = new Set();
for (let i = 0; i < 1000; i++) {
  const value = getRandomIntInclusive(start, end);
  try {
    assert.ok(Number.isInteger(value), 'Expected integer result');
    assert.ok(value >= start && value <= end, `Expected value within range, ${value} out of range`);
    generatedValues.add(value);
  } catch (err) {
    console.log(`q11 test FAILED for getRandomIntInclusive(${start}, ${end}) -> ${err.message}`);
    failed = true;
    break;
  }
}

// Check if all values from 1 to 6 were generated
if (!failed) {
  const expectedValues = new Set();
  for (let i = start; i <= end; i++)
    expectedValues.add(i);

  if (generatedValues.size !== expectedValues.size) {
    console.log(`q11 test FAILED: Not all values generated. Generated: ${[...generatedValues].sort().join(', ')}`);
    failed = true;
  }
}

if (! failed) {
  console.log('q11 tests passed');
}
console.log();