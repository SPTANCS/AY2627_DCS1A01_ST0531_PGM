console.clear();

function printChar(c) {
  let str = c + c + c + c + c;

  console.log(str);
}

function printPattern(c) {
  printChar(c);
  printChar(c);
  printChar(c);
  printChar(c);
  printChar(c);
}

console.log("invoking printChar('@')");
printChar('@');

console.log();

console.log("invoking printPattern('@')");
printPattern('@');