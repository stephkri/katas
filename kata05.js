const urlEncode = function(text) {
  let textTrimmed = text.trim();
  let newString = "";
  for (let i = 0; i < textTrimmed.length; i++) {
    if (textTrimmed[i] === " ") {
      newString = newString.concat("%20");
    } else {
      newString = newString.concat(textTrimmed[i]);
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));