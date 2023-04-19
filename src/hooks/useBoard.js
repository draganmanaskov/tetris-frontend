import { useEffect, useState } from "react";
import { buildBoard, nextBoard } from "../business/Board/Board";

const useBoard = ({ rows, columns, player, resetPlayer, addLinesCleared }) => {
  const [board, setBoard] = useState(buildBoard(rows, columns));

  useEffect(() => {
    //console.log(board);
    setBoard((previousBoard) =>
      nextBoard({
        board: previousBoard,
        player,
        resetPlayer,
        addLinesCleared,
      })
    );
  }, [player, resetPlayer, addLinesCleared]);

  return [board, setBoard];
};

export default useBoard;
