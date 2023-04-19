import React from "react";
import { isWithinBoard } from "../../business/Board/Board";
import { playerConroler } from "../../business/Controller/Controller";
import { actionForKey } from "../../business/Input";

const Controller = ({ board, player, setPlayer }) => {
  const onKeyDown = (e) => {
    const action = actionForKey(e.code);
    playerConroler(board, player, action, setPlayer);
  };

  const onKeyUp = () => {
    // console.log("key up");
  };

  return (
    <input
      className="GameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
    />
  );
};

export default Controller;
