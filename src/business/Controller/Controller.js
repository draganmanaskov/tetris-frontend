import { isWithinBoard, hasColisionHandler } from "../Board/Board";
import { Action } from "../Input";
import { rotateTetromino } from "../Tetrominoes/Tetrominoes";

export const playerController = (
  action,
  board,
  player,
  setPlayer,
  setGameOver,
  setGameStats
) => {
  let { position, tetromino } = player;
  let shape = [...tetromino.shape];

  if (action === Action.Rotate) {
    attemptRotate(position, board, shape, player, setPlayer);
  } else {
    let newPosition = getPosition(action, position);
    attemptMove(
      newPosition,
      board,
      shape,
      player,
      setPlayer,
      action,
      setGameOver
    );
  }
};

export const attemptRotate = (position, board, shape, player, setPlayer) => {
  let newShape = rotateTetromino(shape);

  const isWithin = isWithinBoard(position, board, newShape);
  const hasColision = hasColisionHandler(position, board, newShape);

  if (isWithin && !hasColision) {
    player.tetromino.shape = newShape;
    console.log(player.tetromino.shape);
    setPlayer({ ...player });
  }
};

export const attemptMove = (
  position,
  board,
  shape,
  player,
  setPlayer,
  action,
  setGameOver
) => {
  const isWithin = isWithinBoard(position, board, shape);
  const hasColision = hasColisionHandler(position, board, shape);

  const preventMove = !isWithin || (isWithin && hasColision);

  const newPosition = preventMove ? player.position : position;
  const isMovingDown = action === Action.SlowDrop;

  const isHit = isMovingDown && (hasColision || !isWithin);

  const isGameOver = isHit && player.position.row === 0;
  if (isGameOver) {
    setGameOver(isGameOver);
  }

  setPlayer((prevState) => ({
    ...prevState,
    position: newPosition,
    collided: isHit,
  }));

  // else {
  //   console.log(position);
  //   if (position.row > 20 - shape.length) {
  //     setPlayer((prevState) => ({ ...prevState, collided: true }));
  //   }
  // }
};

export const getPosition = (action, position) => {
  let newPosition = { ...position };
  if (action === Action.Left) {
    newPosition.column -= 1;
  }
  if (action === Action.Right) {
    newPosition.column += 1;
  }
  if (action === Action.SlowDrop) {
    newPosition.row += 1;
  }

  return newPosition;
};

export const finalTetrominoPosition = (setPlayer) => {
  setPlayer((prevState) => {
    console.log(prevState);
    return {
      ...prevState,
    };
  });
};
