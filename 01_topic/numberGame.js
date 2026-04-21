console.clear();

const input = require('readline-sync');

const magicNumber = Math.floor(Math.random() * 100) + 1;

let userGuess;

do {
  userGuess = input.questionInt('Please enter your guess (1 to 100) >> ');

  if (userGuess < magicNumber) {
    console.log(`Your guess ${userGuess} is too low.`);
  } else if (userGuess > magicNumber) {
    console.log(`Your guess ${userGuess} is too high.`);
  } else {
    console.log(`Your guess ${userGuess} is CORRECT!.`);
  }
} while (userGuess != magicNumber);