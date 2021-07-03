const multiplicationTable = function(maxValue) {
  let theString = "";
  for (let i = 1; i <= maxValue; i++) {
    // this is for each line
    for (let j = 1; j <= maxValue; j++) {
      // this is for each individual number
      theString = theString.concat((j * i) + " ");
    }
    theString = theString.slice(0, -1);
    theString = theString.concat("\n");
  }
  return theString;
};

/*
Nested loop
Use string concat w initial empty string at beginning of function
Outside loop includes /n
Remove the last space in the inside loop
*/

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(12));