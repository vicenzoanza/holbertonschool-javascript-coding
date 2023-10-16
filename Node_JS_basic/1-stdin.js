const readline = require('readline');

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

userInput.question('', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  userInput.close();
});
