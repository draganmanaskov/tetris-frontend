import { defaultCell } from "../Cell/Cell";
import { placePieceOnBoard } from "../Tetrominoes/Tetrominoes";

export const buildBoard = (rows, columns) => {
  const board = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return board;
};

export const nextBoard = ({ board, player, resetPlayer, setMultiplier }) => {
  const { tetromino, position } = player;

  let newBoard = board.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  placePieceOnBoard(tetromino, newBoard, position, player);

  let { updatedBoard, rowsCleared } = clearFullRows(newBoard);

  if (player.collided) {
    setMultiplier(rowsCleared);
    resetPlayer();
  }

  return updatedBoard;
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

export const hasColisionHandler = (position, board, shape) => {
  for (let i = 0; i < shape.length; i++) {
    let deltaRow = i + position.row;
    for (let j = 0; j < shape[i].length; j++) {
      if (shape[i][j]) {
        let deltaColumn = j + position.column;

        if (
          board[deltaRow] &&
          board[deltaRow][deltaColumn] &&
          board[deltaRow][deltaColumn].occupied
        ) {
          return true;
        }
      }
    }
  }

  return false;
};

export const clearFullRows = (board) => {
  const updatedBoard = [];
  let rowsCleared = 0;

  for (let i = 0; i < board.length; i++) {
    if (board[i].every((val) => val.occupied)) {
      rowsCleared++;
      continue;
    } else {
      updatedBoard.push(board[i]);
    }
  }

  const numCols = board[0].length;
  while (updatedBoard.length < board.length) {
    updatedBoard.unshift(
      Array.from({ length: numCols }, () => ({ ...defaultCell }))
    );
  }

  return { updatedBoard, rowsCleared };
};
