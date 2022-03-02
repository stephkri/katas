let prompt = require("prompt-sync")();

let number = Math.floor(Math.random() * 100);

const numberGuesser = (num, attempts) => {

  let guess = parseFloat(prompt("Guess a number:"));

  if (!/^\d+$/.test(guess)) {
    console.log("Not a number! Try again.")
    numberGuesser(num, attempts + 1)
  }

  if (guess > num) {
    console.log("Too high!")
    numberGuesser(num, attempts + 1)
  }

  if (guess < num) {
    console.log("Too low!")
    numberGuesser(num, attempts + 1)
  }

  if (guess === num) {
    console.log(`Correct! You took ${attempts} attempts.`)
    return
  }
}

numberGuesser(number, 1)