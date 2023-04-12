import { useEffect, useState } from "react";
import { buildBoard, nextBoard } from "../business/Board/Board";

const useBoard = ({
  rows,
  columns,
  player,
  resetPlayer,
  addLinesCleared,
  setGameStatsHandler,
}) => {
  const [board, setBoard] = useState(buildBoard(rows, columns));

  useEffect(() => {
    setBoard((previousBoard) =>
      nextBoard({
        board: previousBoard,
        player,
        resetPlayer,
        addLinesCleared,
        setGameStatsHandler,
      })
    );
  }, [player, resetPlayer, setGameStatsHandler]);

  return [board, setBoard];
};

export default useBoard;
