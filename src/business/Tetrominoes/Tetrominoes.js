const className = "tetromino";

export const TETROMINOES = {
  I: {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    className: `${className} ${className}__i`,
  },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    className: `${className} ${className}__j`,
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    className: `${className} ${className}__l`,
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    className: `${className} ${className}__o`,
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    className: `${className} ${className}__s`,
  },
  T: {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    className: `${className} ${className}__t`,
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    className: `${className} ${className}__z`,
  },
};

export const randomTetromino = () => {
  const keys = Object.keys(TETROMINOES);
  const index = Math.floor(Math.random() * keys.length);
  const key = keys[index];
  return { ...TETROMINOES[key] };
};

export const transferToBoard = () => {};

export const rotateTetromino = (shape) => {
  let temp = shape.map((_, index) => {
    return shape.map((row) => row[index]);
  });

  temp.forEach((row) => {
    row.reverse();
  });

  return temp;
};

export const placePieceOnBoard = (tetromino, newBoard, position, player) => {
  const { row, column } = position;
  const collided = player.collided;

  tetromino.shape.forEach((rowArray, i) => {
    rowArray.forEach((cell, j) => {
      try {
        if (newBoard[i + row][j + column].occupied) {
          return;
        }

        if (cell === 1) {
          newBoard[i + row][j + column] = {
            occupied: collided,
            className: tetromino.className,
          };
        }
      } catch (error) {
        return;
      }
    });
  });
};
