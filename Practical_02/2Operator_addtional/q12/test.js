const assert = require('assert');
const { hypotenuse } = require('./code');

console.clear();

let failed = false;

try {
  assert.strictEqual(hypotenuse(3, 4), 5, 'hypotenuse(3, 4) should be 5');
  assert.strictEqual(hypotenuse(5, 12), 13, 'hypotenuse(5, 12) should be 13');
  assert.strictEqual(hypotenuse(8, 15), 17, 'hypotenuse(8, 15) should be 17');
} catch (err) {
  console.log(`q12 test FAILED -> ${err.message}`);
  failed = true;
}

if (!failed) {
  console.log('q12 tests passed');
}
console.log();