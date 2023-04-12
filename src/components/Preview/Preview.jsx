import React from "react";
import PreviewBoard from "./PreviewBoard";

const Preview = ({ tetrominoes }) => {
  const previewTetrominoes = tetrominoes
    .slice(3 - tetrominoes.length)
    .reverse();

  return (
    <div className={`mx-4 `}>
      {previewTetrominoes.map((tetromino, index) => (
        <PreviewBoard tetromino={tetromino} index={index} key={index} />
      ))}
    </div>
  );
};

export default Preview;
