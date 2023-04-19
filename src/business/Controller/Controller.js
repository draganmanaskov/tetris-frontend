import { isWithinBoard } from "../Board/Board";
import { Action } from "../Input";
import { rotateTetromino } from "../Tetrominoes/Tetrominoes";

export const playerConroler = (board, player, action, setPlayer) => {
  let tempPlayer = { ...player };
  let position = { ...tempPlayer.position };

  if (action === Action.Left) {
    position.column -= 1;
  }

  if (action === Action.Right) {
    position.column += 1;
  }
  if (action === Action.Rotate) {
    attemptRotation(board, player, setPlayer);
  }

  if (action === Action.SlowDrop) {
    position.row += 1;
  }

  if (isWithinBoard(board, position, tempPlayer.tetromino.shape)) {
    tempPlayer.position = position;
    setPlayer(tempPlayer);
  }
};

// export const attemptMovePiece = ()

export const attemptRotation = (board, player, setPlayer) => {
  let shape = player.tetromino.shape;
  let position = player.position;

  let newShape = rotateTetromino(shape);

  if (isWithinBoard(board, position, newShape)) {
    player.tetromino.shape = newShape;
    setPlayer(player);
  }
};
