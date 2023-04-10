import React from "react";
import { Action, actionForKey } from "../../business/Input";
import { playerController } from "../../business/Controller/Controller";
import { useInterval } from "../../hooks/useInterval";

const Controller = ({ board, player, setPlayer, resetPlayer }) => {
  useInterval(() => {
    playerController(Action.SlowDrop, board, player, setPlayer, resetPlayer);
  }, 1000);

  const onKeyDown = (e) => {
    let tempPlayer = { ...player };

    let action = actionForKey(e.code);

    playerController(action, board, player, setPlayer, resetPlayer);
  };

  const onKeyUp = () => {
    console.log("key up");
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
