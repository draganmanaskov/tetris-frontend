import React from "react";
import "./BoardCell.css";

const BoardCell = ({ cell }) => {
  return (
    <div className={`BoardCell h-8 w-8 ${cell.className}`}>
      <div className="Sparkle"></div>
    </div>
  );
};

export default BoardCell;

{
  /* <div
  key={`${rowIndex}-${columnIndex}`}
  className="h-8 w-8 border border-gray-400"
></div>; */
}
