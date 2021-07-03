const camelCase = function(input) {
  let camelString = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i - 1] === " ") {
      camelString = camelString.concat(input[i].toUpperCase());
    } else {
      camelString = camelString.concat(input[i]);
    }
  }
  camelString = camelString.replace(/\s+/g, '');
  return camelString;
};

/*
for loop that checks if a certain character is a space?
if it's a space, then it has to be removed and the NEXT character has to be capitalized
let's do it in 2 steps:
first capitalize letters
then replace method which removes the spaces
maybe variable for indexOf space + 1?
*/

console.log(camelCase("this is a string") + " =? thisIsAString");
console.log(camelCase("loopy lighthouse") + " =? loopyLighthouse");
console.log(camelCase("supercalifragalisticexpialidocious") + " =? supercalifragalisticexpialidocious");
console.log(camelCase("you a rat now") + " =? youARatNow");
console.log(camelCase("are you gonna talk") + " =? areYouGonnaTalk");