const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const makeCase = function(input, cass) {
  let caseArray = [];
  if (Array.isArray(cass)) {
    for (const word of cass) {
      caseArray.push(word);
    }
  } else {
    caseArray.push(cass);
  }
  let newString = "";
  const isVowel = x => !!x.match(/[aeiou]/i);
  for (let i = 0; i < input.length; i++) {
    switch (caseArray[0]) {
    case "camel":
      if (input[i - 1] === " ") {
        newString = newString.concat(input[i].toUpperCase());
      } else {
        newString = newString.concat(input[i]);
      }
      newString = newString.replace(/\s+/g, '');
      break;
    case "pascal":
      if (input[i - 1] === " " || i === 0) {
        newString = newString.concat(input[i].toUpperCase());
      } else {
        newString = newString.concat(input[i]);
      }
      newString = newString.replace(/\s+/g, '');
      break;
    case "snake":
      if (input[i] === " ") {
        newString = newString.concat("_");
      } else {
        newString = newString.concat(input[i]);
      }
      break;
    case "kebab":
      if (input[i] === " ") {
        newString = newString.concat("-");
      } else {
        newString = newString.concat(input[i]);
      }
      break;
    case "title":
      if (input[i - 1] === " " || i === 0) {
        newString = newString.concat(input[i].toUpperCase());
      } else {
        newString = newString.concat(input[i]);
      }
      break;
    case "vowel":
      if (isVowel(input[i])) {
        newString = newString.concat(input[i].toUpperCase());
      } else {
        newString = newString.concat(input[i].toLowerCase());
      }
      break;
    case "consonant":
      if (!isVowel(input[i])) {
        newString = newString.concat(input[i].toUpperCase());
      } else {
        newString = newString.concat(input[i].toLowerCase());
      }
      break;
    case "upper":
      newString = newString.concat(input[i].toUpperCase());
      break;
    case "lower":
      newString = newString.concat(input[i].toLowerCase());
      break;
    }
  }
  if (caseArray.length > 1) {
    caseArray.shift();
    return makeCase(newString, caseArray);
  } else {
    return newString;
  }
};

assertEqual(makeCase("this is a string", "camel"), "thisIsAString");
assertEqual(makeCase("this is a string", "pascal"), "ThisIsAString");
assertEqual(makeCase("this is a string", "snake"), "this_is_a_string");
assertEqual(makeCase("this is a string", "kebab"), "this-is-a-string");
assertEqual(makeCase("this is a string", "title"), "This Is A String");
assertEqual(makeCase("this is a string", "vowel"), "thIs Is A strIng");
assertEqual(makeCase("this is a string", "consonant"), "THiS iS a STRiNG");
assertEqual(makeCase("this is a string", ["upper", "snake"]), "THIS_IS_A_STRING");