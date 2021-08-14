// starts from top left corner; y first, then x
const generateBoard = function(white, black) {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const whiteY = white[0];
  const blackY = black[0];
  const whiteX = white[1];
  const blackX = black[1];
  board[whiteY][whiteX] = 1;
  board[blackY][blackX] = 1;
  return board;
};

const queenThreat = function(board) {
  let queen1 = [];
  let queen2 = [];
  for (let i = 0; i < board.length; i++) { // y axis
    for (let j = 0; j < board[i].length; j++) { // x axis
      if (board[i][j] === 1) {
        if (queen1.length === 0) {
          queen1.push(board.indexOf(board[i]));
          queen1.push(board[i].indexOf(board[i][j]));
        } else {
          queen2.push(board.indexOf(board[i]));
          queen2.push(board[i].indexOf(board[i][j]));
        }
      }
    }
  }
  if(queen1[0] === queen2[0] || queen1[1] === queen2[1]) {
    return true;
  }
  if(Math.abs(queen1[0] - queen2[0]) === Math.abs(queen2[1] - queen1[1])) {
    return true;
  }
  return false;
};

let whiteQueen = [0, 0]; // would also be true for 1, 4; 2, 3; 3, 2; 4, 1;
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/*
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
*/