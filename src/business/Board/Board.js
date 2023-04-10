import { defaultCell } from "../Cell/Cell";

export const buildBoard = (rows, columns) => {
  const board = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return board;
};

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
  const { tetromino, position } = player;
  const { row, column } = position;
  let tempBoard = board.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  tetromino.shape.forEach((rowArray, i) => {
    rowArray.forEach((cell, j) => {
      try {
        if (tempBoard[i + row][j + column].occupied) {
          console.log(tempBoard[i + row][j + column]);
          return;
        }

        if (cell === 1) {
          tempBoard[i + row][j + column].className = tetromino.className;
        }
      } catch (error) {
        return;
      }
    });
  });
  return tempBoard;
};

export const isWithinBoard = (position, board, shape) => {
  for (let i = 0; i < shape.length; i++) {
    let deltaRow = i + position.row;
    for (let j = 0; j < shape[i].length; j++) {
      if (shape[i][j]) {
        let deltaColumn = j + position.column;
        const isValidPosition = board[deltaRow] && board[deltaRow][deltaColumn];

        if (!isValidPosition) return false;
      }
    }
  }

  return true;
};
