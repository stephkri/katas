const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  let keyArr1 = Object.keys(obj1);
  let keyArr2 = Object.keys(obj2);
  if (keyArr1.length !== keyArr2.length) {
    return false;
  }
  for (const key of keyArr1) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

const calculateChange = function(total, cash) {
  const totalChange = cash - total; // this works
  let downChange = totalChange;
  let newObj = {};
  if (downChange >= 1000) {
    newObj.tenDollar = 0;
  }
  while (downChange >= 1000) {
    newObj.tenDollar += 1;
    downChange -= 1000;
  }
  if (downChange >= 5000) {
    newObj.fiveDollar = 0;
  }
  while (downChange >= 500) {
    newObj.fiveDollar += 1;
    downChange -= 500;
  }
  if (downChange >= 200) {
    newObj.twoDollar = 0;
  }
  while (downChange >= 200) {
    newObj.twoDollar += 1;
    downChange -= 200;
  }
  if (downChange >= 100) {
    newObj.oneDollar = 0;
  }
  while (downChange >= 100) {
    newObj.oneDollar += 1;
    downChange -= 100;
  }
  if (downChange >= 25) {
    newObj.quarter = 0;
  }
  while (downChange >= 25) {
    newObj.quarter += 1;
    downChange -= 25;
  }
  if (downChange >= 10) {
    newObj.dime = 0;
  }
  while (downChange >= 10) {
    newObj.dime += 1;
    downChange -= 10;
  }
  if (downChange >= 5) {
    newObj.nickel = 0;
  }
  while (downChange >= 5) {
    newObj.nickel += 1;
    downChange -= 5;
  }
  if (downChange >= 1) {
    newObj.penny = 0;
  }
  while (downChange >= 1) {
    newObj.penny += 1;
    downChange -= 1;
  }
  return newObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


assertObjectsEqual(calculateChange(1787, 2000), { twoDollar: 1, dime: 1, penny: 3 });
assertObjectsEqual(calculateChange(2623, 4000), { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 });
assertObjectsEqual(calculateChange(501, 1000), { twoDollar: 2, quarter: 3, dime: 2, penny: 4 });
