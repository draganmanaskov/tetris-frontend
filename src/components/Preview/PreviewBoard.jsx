import React from "react";
import { buildBoard } from "../../business/Board/Board";
import BoardCell from "../BoardCell/BoardCell";

const PreviewBoard = ({ tetromino, index }) => {
  const { shape, className } = tetromino;
  const board = buildBoard(4, 4);

  let newBoard = board.map((row, i) => {
    return row.map((cell, j) => {
      try {
        if (shape[i][j] === 1) {
          return { occupied: true, className: className };
        }
      } catch (error) {
        return cell;
      }

      return cell;
    });
  });

  return (
    <div
      className={`mb-4 flex  flex-col rounded-lg border-2  bg-slate-900 p-2`}
    >
      {newBoard.map((row, i) => (
        <div key={`row-${i}`} className={"flex"}>
          {row.map((cell, j) => (
            <BoardCell key={`cell-${i}-${j}`} cell={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PreviewBoard;
