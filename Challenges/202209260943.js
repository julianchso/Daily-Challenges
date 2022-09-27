// https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript

function validSolution(board) {
  let valid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // testing for 0's
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        return false;
      }
    }
  }

  //   testing horizontal lines
    for (let i = 0; i < 9; i++) {
      let values = [];
      for (let j = 0; j < 9; j++) {
        if (values.includes(board[i][j])) {
          return false;
        } else {
          values.push(board[i][j]);
        }
      }
    }

  // testing vertical lines
    for (let j = 0; j < 9; j++) {
      values = [];
      for (let i = 0; i < 9; i++) {
        if (values.includes(board[i][j])) {
          return false;
        } else {
          values.push(board[i][j]);
        }
      }
    }

  // testing 3x3 blocks
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let values = [];
      for (let w = j; w < j + 3; w++) {
        for (let h = i; h < i + 3; h++) {
          console.log(`[h][w]: ${h},${w}`);
          if (values.includes(board[h][w])) {
            return false;
          } else {
            values.push(board[h][w]);
          }
        }
      }
    }
  }

  return true;
}

console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
