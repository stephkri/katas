const organizeInstructors = function(instructors) {
  let newObj = {};
  for (let teacher of instructors) {
    newObj[teacher.course] = [];
  }
  for (let teacher of instructors) {
    newObj[teacher.course].push(teacher.name);
  }
  return newObj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/*
start with a for of loop to reach every object
for each one: newObj[element.course] = [] - this will set up the categories
then another for of loop in the same array
for each one: newObj[element.course].push(element.name)

Expected output:
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/