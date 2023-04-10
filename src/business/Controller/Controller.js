import { isWithinBoard } from "../Board/Board";
import { Action } from "../Input";
import { rotateTetromino } from "../Tetrominoes/Tetrominoes";

export const playerController = (
  action,
  board,
  player,
  setPlayer,
  resetPlayer
) => {
  let { position, tetromino } = player;
  let shape = [...tetromino.shape];

  if (action === Action.Rotate) {
    attemptRotate(position, board, shape, player, setPlayer);
  } else {
    let newPosition = getPosition(action, position);
    attemptMove(newPosition, board, shape, setPlayer, resetPlayer);
  }
};

export const attemptRotate = (position, board, shape, player, setPlayer) => {
  let newShape = rotateTetromino(shape);

  const isWithin = isWithinBoard(position, board, newShape);
  if (isWithin) {
    player.tetromino.shape = newShape;
    console.log(player.tetromino.shape);
    setPlayer({ ...player });
  }
};

export const attemptMove = (position, board, shape, setPlayer, resetPlayer) => {
  const isWithin = isWithinBoard(position, board, shape);
  if (isWithin) {
    setPlayer((prevState) => ({ ...prevState, position }));
  } else {
    console.log(position);
    if (position.row > 20 - shape.length) {
      resetPlayer();
    }
  }
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
