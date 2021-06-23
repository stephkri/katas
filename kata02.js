const conditionalSum = function(values, condition) {
  let arrayOfMet = [];
  let theSum = 0;
  for (let i = 0; i < values.length; i++) {
    if (condition === "even") {
      if (values[i] % 2 === 0) {
        arrayOfMet.push(values[i]);
      }
    } else {
      if (values[i] % 2 != 0) {
        arrayOfMet.push(values[i]);
      }
    }
  }
  for (let j = 0; j < arrayOfMet.length; j++) {
    theSum += arrayOfMet[j];
  }
  return theSum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even") + "=? 6");
console.log(conditionalSum([1, 2, 3, 4, 5], "odd") + "=? 9");
console.log(conditionalSum([13, 88, 12, 44, 99], "even") + "=? 144");
console.log(conditionalSum([], "odd") + "=? 0");