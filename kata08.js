const repeatNumbers = function(data) {
  let finalString = "";
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      finalString = finalString.concat(data[i][0]);
    }
    finalString = finalString.concat(", ")
  }
  finalString = finalString.slice(0, -2);
  return finalString;
};

/*
nested for loop - one outside for each pair of numbers, and another inside for what to do w the pair
pairs of numbers are always nested elements
2nd for loop:
perhaps introduce a variable in the first for loop?
or 2 variables, one for each element?

*/

console.log(repeatNumbers([[1, 10]]) + " =? 1111111111");
console.log(repeatNumbers([[1, 2], [2, 3]]) + " =? 11, 222");
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]) + " =? 10101010, 343434343434, 9292");