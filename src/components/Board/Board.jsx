import { useEffect } from "react";
import BoardCell from "../BoardCell/BoardCell";
import useBoard from "../../hooks/useBoard";
import { usePlayer } from "../../hooks/usePlayer";

const Board = ({ board }) => {
  return (
    <div className={` h-160 w-80  bg-slate-900`}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, columnIndex) => (
            <BoardCell cell={cell} key={`${rowIndex}-${columnIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
