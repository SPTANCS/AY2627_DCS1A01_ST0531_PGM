console.clear();

/* ============================================================
   FUNCTION DEMO: PARAMETERS, DEFAULT VALUES, AND FUNCTION CALLS
   ============================================================
   
   This example demonstrates:
   1. How to define functions with PARAMETERS
   2. How to set DEFAULT VALUES for parameters
   3. How to CALL functions with different numbers of arguments
   4. How DEFAULT VALUES work when fewer arguments are passed
   5. What happens when MORE arguments are passed than parameters
   6. How to call functions from within other functions (NESTED CALLS)
   
   ============================================================ */

// FUNCTION 1: printChar()
// Purpose: Takes 2 character parameters and creates a pattern string
// Parameters:
//   - c1 (default: '*'): First character used in the pattern
//   - c2 (default: ' '): Character used as separator/space
// 
// Default Values Explanation:
//   - c1 = '*' means if you don't pass a value for c1, it will use '*'
//   - c2 = ' ' means if you don't pass a value for c2, it will use a space ' '
//   - This allows flexibility in calling the function with 0, 1, or 2 arguments
//
// How it builds the string:
//   The function creates: c1 + c2 + c1 + c2 + c1
//   Example: If c1='*' and c2=' ', it makes: "* * *"
function printChar(c1 = '*', c2 = ' ') {
  // Build a string using the pattern: character-separator-character-separator-character
  let str = c1 + c2 + c1 + c2 + c1;
  
  // Display the result
  console.log(str);
}

// FUNCTION 2: printPattern()
// Purpose: Creates a pattern by calling printChar() 5 times in a row
// Parameters:
//   - c1 (default: '*'): First character to pass to printChar
//   - c2 (default: ' '): Separator character to pass to printChar
//
// This is an example of a NESTED FUNCTION CALL:
// - This function receives parameters and passes them to another function (printChar)
// - This demonstrates code reusability and how functions work together
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
// When we pass only c1 = '*', the c2 parameter gets its DEFAULT VALUE ' '
// Result: "* * *" (star-space-star-space-star)
console.log("invoking printChar('*')");
printChar('*');  // Uses: c1='*', c2=' ' (default)
console.log();

// ============================================================
// DEMONSTRATION 2: Calling with TWO arguments
// ============================================================
// When we pass c1 = '*' and c2 = '!', we override the default for c2
// Result: "*!*!*" (star-exclamation-star-exclamation-star)
console.log("invoking printChar('*', '!')");
printChar('*', '!');  // Uses: c1='*', c2='!'
console.log();

// ============================================================
// DEMONSTRATION 3: Calling printPattern with TWO arguments
// ============================================================
// Passes both parameters to printPattern, which then passes them to printChar
// This creates a 5-line pattern with @ as the main character and $ as separator
// Each line will show: "@$@$@"
console.log("invoking printPattern('@', '$')");
printPattern('@', '$');  // Uses: c1='@', c2='$'
console.log();

// ============================================================
// DEMONSTRATION 4: Calling printPattern with ONE argument
// ============================================================
// Passes only c1 = '@' to printPattern
// c2 gets its DEFAULT VALUE ' ' (space)
// Each line will show: "@ @ @" (@ with space separator)
console.log("invoking printPattern('@')");
printPattern('@');  // Uses: c1='@', c2=' ' (default)
console.log();

// ============================================================
// DEMONSTRATION 5: Calling printPattern with NO arguments
// ============================================================
// Passes nothing - both parameters get their DEFAULT VALUES
// c1 gets default '*' and c2 gets default ' '
// Each line will show: "* * *" (classic asterisk pattern)
console.log("invoking printPattern()");
printPattern();  // Uses: c1='*' (default), c2=' ' (default)
console.log();

// ============================================================
// DEMONSTRATION 6: Calling with MORE arguments than parameters
// ============================================================
// Function has 2 parameters (c1, c2), but we pass 4 arguments ('%', '~', '!', '*')
// JavaScript ignores EXTRA arguments - only uses the first 2: '%' and '~'
// The 3rd and 4th arguments ('!', '*') are IGNORED
// Each line will show: "%~%~%"
// Important: Extra arguments don't cause an error - they're just ignored!
console.log("invoking printPattern('%', '~', '!', '*')");
printPattern('%', '~', '!', '*');  // Uses: c1='%', c2='~' (extra args ignored)
console.log();
