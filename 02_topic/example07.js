console.clear();

/* ============================================================
   MATH.RANDOM(): GENERATING RANDOM NUMBERS IN JAVASCRIPT
   ============================================================
   
   Math.random() is a built-in JavaScript function that generates
   a PSEUDO-RANDOM decimal number between 0 and 1 (but never exactly 1).
   
   Key Facts:
   - Returns a number: 0.0000000000... to 0.9999999999...
   - Always a decimal (floating-point) number
   - Different each time you call it
   - Not truly random (pseudo-random) - uses an algorithm
   
   Common Use Cases:
   - Games (dice rolls, card shuffles)
   - Simulations
   - Random selections
   - Password generation
   - Testing with random data
   
   ============================================================ */

// EXAMPLE 1: Basic Math.random() - returns 0.0 to 0.999...
// This gives you a random decimal between 0 and 1
let x = Math.random(); // 0.0000 ..... 0.999999
console.log("Basic random (0 to <1)\t\t:", x);

// EXAMPLE 2: Scale to a larger range
// Multiply by a number to get a larger range
// Math.random() * 10 gives: 0.000... to 9.999...
x = Math.random() * 10; // 0.0000 ... 9.9999999
console.log("Scaled random (0 to <10)\t:", x);

// EXAMPLE 3: Get whole numbers (integers) using Math.floor
// Math.floor() rounds DOWN to the nearest whole number
// This gives you random integers from 0 to 9 (inclusive)
x = Math.floor(Math.random() * 10); // 0 to 9
console.log("Random integer (0 to 9)\t\t:", x);

// EXAMPLE 4: Shift the range by adding a number
// Add a number to shift the entire range up
// Math.floor(Math.random() * 10) gives 0-9, plus 5 gives 5-14
x = Math.floor(Math.random() * 10) + 5; // 5 to 14
//  (0 to 9) + 5
//  (5 to 14)
console.log("Random integer (5 to 14)\t:", x);

// EXAMPLE 5: Custom range formula
// General formula for random integer from A to B:
// Math.floor(Math.random() * (B - A + 1)) + A
//
// For range 20 to 35:
// B = 35, A = 20
// (35 - 20 + 1) = 16 
// Math.floor(Math.random() * 16) gives 0-15
// Plus 20 gives 20-35
let y = Math.floor(Math.random() * 16) + 20; // 20 to 35
console.log("Random integer (20 to 35)\t:", y);

// GENERAL FORMULA EXPLAINED:
// Math.floor(Math.random() * (max - min + 1)) + min
//
// Breaking it down:
// 1. Math.random() gives 0.0 to 0.999...
// 2. Multiply by (max - min + 1) to get the right number of possibilities
// 3. Math.floor() converts to integer (0, 1, 2, ..., (max-min))
// 4. Add min to shift the range to start at your minimum value
//
// Examples:
// - For 0-9:   Math.floor(Math.random() * (9-0+1)) + 0    = Math.floor(Math.random() * 10) + 0
//                                                         = Math.floor(Math.random() * 10) 
// - For 5-14:  Math.floor(Math.random() * (14-5+1)) + 5   = Math.floor(Math.random() * 10) + 5
// - For 20-35: Math.floor(Math.random() * (35-20+1)) + 20 = Math.floor(Math.random() * 16) + 20