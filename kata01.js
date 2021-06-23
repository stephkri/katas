const sumLargestNumbers = function(data) {
  let sortedFromLargest = data.sort(function(a, b){return b-a});
  let finalNumber = 0;
  for (let i = 0; i <= 1; i++) {
    finalNumber += sortedFromLargest[i];
  }
  return finalNumber;
};

console.log(sumLargestNumbers([1, 10]) + "=? 11");
console.log(sumLargestNumbers([1, 2, 3]) + "=? 5");
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]) + "=? 126");