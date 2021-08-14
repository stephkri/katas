let prompt = require('prompt-sync')({
  history: require('prompt-sync-history')() //open history file
});
const theNum = Math.floor(Math.random() * 100);
// code below (replace this example)
let answer = prompt("Guess a number: ");
let numOfTries = 0;
let tries = [];
answer = Number(answer);
if (tries.indexOf(answer) !== -1) {
  console.log("Already guessed!");
  numOfTries++;
} else if (typeof answer !== "number") {
  console.log("Not a number! Try again!");
  numOfTries ++;
  tries.push(answer);
} else if (answer === theNum) {
  console.log("You got it! You took " + numOfTries + " attempts.");
} else if (answer > theNum) {
  console.log("Too High!");
  numOfTries ++;
  tries.push(answer);
} else if (answer < theNum) {
  console.log("Too Low!");
  numOfTries ++;
  tries.push(answer);
}
//console.log("You answered: " + answer);
//console.log("Type of answer: " + typeof answer);
prompt.history.save();