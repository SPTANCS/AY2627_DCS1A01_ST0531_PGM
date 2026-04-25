console.clear();

function greetingA(givenName) {
  console.log(`Hello ${givenName}. How are you?`);
}

function greetingB(givenName) {
  return (`Hello ${givenName}. How are you?`);
}

console.log("invoking greetingA('Peter')");
greetingA('Peter');
console.log();

console.log("invoking greetingB('Mary')");
greetingB('Mary');
console.log();

console.log("invoking greetingA('Peter') in a console.log");
console.log(greetingA('Peter'));
console.log();

console.log("invoking greetingB('Mary') in a console.log");
console.log(greetingB('Mary'));
console.log();
