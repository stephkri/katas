const whereCanIPark = function (spots, vehicle) {
  let iCantPark = false; // to be returned if no spots are available
  let finalTwo = [];
  for (let y = 0; y < spots.length; y ++) {
    for (let x = 0; x < spots[y].length; x ++) {
      // the syntax is spots[y][x]
      if (vehicle === "regular") {
        if (spots[y][x] === "R") {
          finalTwo.push(spots[y].indexOf(spots[y][x]));
          finalTwo.push(spots.indexOf(spots[y]));
          return finalTwo;
        }
      } else if (vehicle === "small") {
        if ((spots[y][x] === "R") || (spots[y][x] === "S")) {
          finalTwo.push(spots[y].indexOf(spots[y][x]));
          finalTwo.push(spots.indexOf(spots[y]));
          return finalTwo;
        }
      } else {
        if ((spots[y][x] === "R") || (spots[y][x] === "S") || (spots[y][x] === "M")) {
          finalTwo.push(spots[y].indexOf(spots[y][x]));
          finalTwo.push(spots.indexOf(spots[y]));
          return finalTwo;
        }
      }
    }
  }
  return iCantPark;
};

/*
NOTES:

Upper case = AVAILABLE; lower case = unavailable
regular, small, motorcycle
Loop has to cycle through each row, reading it like a western book
check availability: if character === character.toUpperCase()
position: use indexOf function, as in array.indexOf(the desired letter)
^ this index will be pushed to finalTwo array
*/

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
) + "=? [4, 0]");

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
) + "=? false");

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
) + "=? [3, 1]")