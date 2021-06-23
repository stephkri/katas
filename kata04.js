const instructorWithLongestName = function(instructors) {
  let namesArray = [];
  for (let i = 0; i < instructors.length; i++) {
    namesArray.push(instructors[i].name.length);
  }
  namesArray.sort((a, b) => b - a);
  for (let j = 0; j < instructors.length; j++) {
    if(instructors[j].name.length === namesArray[0]) {
      return instructors[j];
    }
  }
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));