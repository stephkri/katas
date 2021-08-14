const blocksAway = function(directions) {
  let dir = "";
  let xAxis = 0;
  let yAxis = 0;
  if (directions[0] === "right") {
    dir = "E";
  } else {
    dir = "N";
  }
  for (let i = 1; i < directions.length; i++) {
    if (typeof directions[i] === "string") {
      if ((dir === "N" && directions[i] === "right") || (dir === "S" && directions[i] === "left")) {
        dir = "E";
      } else if ((dir === "S" && directions[i] === "right") || (dir === "N" && directions[i] === "left")) {
        dir = "W";
      } else if ((dir === "W" && directions[i] === "right") || (dir === "E" && directions[i] === "left")) {
        dir = "N";
      } else if ((dir === "E" && directions[i] === "right") || (dir === "W" && directions[i] === "left")) {
        dir = "S";
      }
    } else {
      switch (dir) {
        case "N":
          yAxis += directions[i];
          break;
        case "E":
          xAxis += directions[i];
          break;
        case "S":
          yAxis -= directions[i];
          break;
        case "W":
          xAxis -= directions[i];
      }
    }
  }
  let newObj = {};
  if (xAxis >= 0) {
    newObj.east = xAxis;
  } else {
    newObj.west = -xAxis;
  }
  if (yAxis >= 0) {
    newObj.north = yAxis;
  } else {
    newObj.south = -yAxis;
  }
  return newObj;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
console.log(blocksAway(["left", 2, "left", 3, "left", 7]));

/*
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}
*/

/*
perhaps a variable dir that goes N/W/E/S?
Make variables for xAxis and yAxis
for (sdfkjsfglkj) {
  if is left or right {
    if is left {
      xAxis -= array[i + 1];
    } else {
      xAxis += array[i + 1];
    }
  }
}
But this only works for the first turn.
*/