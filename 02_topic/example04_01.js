console.clear();

function printChar(c1 = '*', c2 = ' ') {
  // Build a string using the pattern: character-separator-character-separator-character
  let str = c1 + c2 + c1 + c2 + c1;
  
  // Display the result
  console.log(str);
}

function printPattern(c1 = '*', c2 = ' ') {
  // Call printChar 5 times, passing the same parameters each time
  // This creates a 5-line pattern
  printChar(c1, c2);  // Line 1 of pattern
  printChar(c1, c2);  // Line 2 of pattern
  printChar(c1, c2);  // Line 3 of pattern
  printChar(c1, c2);  // Line 4 of pattern
  printChar(c1, c2);  // Line 5 of pattern
}

// ============================================================
// DEMONSTRATION 1: Calling with ONE argument
// ============================================================
console.log("invoking printChar('*')");
printChar('*');  
console.log();

// ============================================================
// DEMONSTRATION 2: Calling with TWO arguments
// ============================================================
console.log("invoking printChar('*', '!')");
printChar('*', '!');
console.log();

// ============================================================
// DEMONSTRATION 3: Calling printPattern with TWO arguments
// ============================================================
console.log("invoking printPattern('@', '$')");
printPattern('@', '$');
console.log();

// ============================================================
// DEMONSTRATION 4: Calling printPattern with ONE argument
// ============================================================
console.log("invoking printPattern('@')");
printPattern('@');
console.log();

// ============================================================
// DEMONSTRATION 5: Calling printPattern with NO arguments
// ============================================================
console.log("invoking printPattern()");
printPattern();
console.log();

// ============================================================
// DEMONSTRATION 6: Calling with MORE arguments than parameters
// ============================================================
console.log("invoking printPattern('%', '~', '!', '*')");
printPattern('%', '~', '!', '*'); 
console.log();
