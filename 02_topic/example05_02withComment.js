console.clear();

/* ============================================================
   FUNCTIONS: RETURN VALUES vs NO RETURN VALUES
   ============================================================
   
   This example demonstrates the CRITICAL DIFFERENCE between:
   1. Functions that RETURN a value
   2. Functions that DON'T return a value (return undefined)
   
   Key Concepts:
   - A function can PRODUCE OUTPUT by printing (console.log)
   - A function can SEND BACK a VALUE using the 'return' keyword
   - These are TWO DIFFERENT THINGS!
   - If a function has no 'return' statement, it returns 'undefined'
   
   ============================================================ */

// FUNCTION A: NO RETURN VALUE
// Purpose: Prints a greeting message to the console
// What it does:
//   - Uses console.log() to PRINT the message
//   - Does NOT have a 'return' statement
//   - Therefore, it returns 'undefined' automatically
// 
// Important Distinction:
//   - console.log() = prints to the screen (SIDE EFFECT)
//   - return = sends a value BACK to the caller (RETURN VALUE)
//   - This function does the first but send back undefine for the second
//
// When you call greetingA, the function:
//   1. Executes console.log() and prints the message
//   2. Ends with no return statement
//   3. Returns the value 'undefined' to the caller
function greetingA(givenName) {
  console.log(`Hello ${givenName}. How are you?`);
  // Note: No 'return' statement here - function returns undefined
}

// FUNCTION B: HAS RETURN VALUE
// Purpose: Creates and RETURNS a greeting message as a value
// What it does:
//   - Uses the 'return' keyword to send back a VALUE
//   - Does NOT print anything directly
//   - The caller receives the greeting string as a value
//
// When you call greetingB, the function:
//   1. Creates the greeting string
//   2. Uses 'return' to send that string back to the caller
//   3. The caller can now USE that returned value
//   4. The caller can print it, store it, manipulate it, etc.
function greetingB(givenName) {
  return (`Hello ${givenName}. How are you?`);
  // 'return' sends the string BACK to whoever called this function
}

// ============================================================
// DEMONSTRATION 1: Calling greetingA() directly
// ============================================================
// What happens:
//   - greetingA('Peter') executes and prints: "Hello Peter. How are you?"
//   - The function returns 'undefined' (but we're not capturing it)
//   - We just see the printed message, we ignore the undefined return value
console.log("invoking greetingA('Peter')");
greetingA('Peter');  // Prints message, returns undefined (ignored)
console.log();

// ============================================================
// DEMONSTRATION 2: Calling greetingB() directly
// ============================================================
// What happens:
//   - greetingB('Mary') executes and RETURNS a string value
//   - Nothing is printed by the function itself
//   - The returned value goes nowhere and is discarded
//   - We see NO OUTPUT because we're not doing anything with the return value
console.log("invoking greetingB('Mary')");
greetingB('Mary');  // Returns "Hello Mary. How are you?" but we don't use it, so nothing appears
console.log();

// ============================================================
// DEMONSTRATION 3: Pass greetingA() result to console.log
// ============================================================
// What happens:
//   1. greetingA('Peter') is called
//   2. It prints: "Hello Peter. How are you?"
//   3. The function returns 'undefined'
//   4. console.log() receives this 'undefined' value
//   5. console.log() prints 'undefined' to the console
// 
// Result: We see TWO LINES of output:
//   Line 1: "Hello Peter. How are you?" (from console.log inside greetingA)
//   Line 2: "undefined" (from console.log receiving the return value)
console.log("invoking greetingA('Peter') in a console.log");
console.log(greetingA('Peter'));  // Prints message AND prints undefined
console.log();

// ============================================================
// DEMONSTRATION 4: Pass greetingB() result to console.log
// ============================================================
// What happens:
//   1. greetingB('Mary') is called
//   2. greetingB executes (does NOT print anything)
//   3. greetingB returns: "Hello Mary. How are you?"
//   4. console.log() receives this returned string
//   5. console.log() prints the string to the console
// 
// Result: We see ONE LINE of output:
//   Line 1: "Hello Mary. How are you?" (the RETURN VALUE from greetingB)
//
// Key Insight:
//   - greetingB returns a VALUE that console.log can USE
//   - greetingA doesn't return anything useful (just undefined)
//   - This is why greetingB is more flexible and reusable!
console.log("invoking greetingB('Mary') in a console.log");
console.log(greetingB('Mary'));  // Prints the RETURNED string value
console.log();
