const urlDecode = function(text) {
  let newObj = {};
  let spaceText = text.split("%20").join(" ");
  let splitProps = spaceText.split("&");
  for (let i = 0; i < splitProps.length; i++) {
    splitProps[i] = splitProps[i].split("=");
  }
  for (let i = 0; i < splitProps.length; i++) {
    newObj[splitProps[i][0]] = splitProps[i][1];
  }
  return newObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


/*
slice or splice the string from indexOf = to indexOf &
maybe make an array of the indexes?
*/