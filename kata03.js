const numberOfVowels = function(data) {
  let finalNumber = 0;
  for (let i = 0; i < data.length; i++) {
    if ((data[i] === "a") || (data[i] === "e") || (data[i] === "i") || (data[i] === "o") || (data[i] === "u")) {
      finalNumber += 1;
    }
  }
  return finalNumber;
};


console.log(numberOfVowels("orange") + "=? 3");
console.log(numberOfVowels("lighthouse labs") + "=? 5");
console.log(numberOfVowels("aeiou") + "=? 5");

