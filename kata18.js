const squareCode = function(message) {
  let firstDiv = "";
  message = message.replace(/\s/g, '');
  const strLen = message.length;
  const colLen = Math.ceil(Math.sqrt(strLen));
  for (let i = 0; i < message.length; i++) {
    firstDiv = firstDiv.concat(message[i]);
    if ((i + 1) % colLen === 0) {
      firstDiv = firstDiv.concat(" ");
    }
  }
  let divArray = firstDiv.split(" ");
  let finalStr = "";
  for (let i = 0; i < colLen; i++) {
    for (const item of divArray) {
      if (item[i]) {
        finalStr = finalStr.concat(item[i]);
      }
    }
    finalStr = finalStr.concat(" ");
  }
  return finalStr;
};


console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));