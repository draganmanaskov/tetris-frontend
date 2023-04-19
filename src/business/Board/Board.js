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

export const isWithinBoard = (board, position, shape) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;
        const isValidPosition = board[row] && board[row][column];

        if (!isValidPosition) return false;
      }
    }
  }

  return true;
};
