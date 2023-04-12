import { useRef, useEffect } from "react";
import { Action, actionForKey } from "../../business/Input";
import { playerController } from "../../business/Controller/Controller";
import { useInterval } from "../../hooks/useInterval";

const Controller = ({
  board,
  player,
  setPlayer,
  setGameOver,
  isPaused,
  pause,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      inputRef.current.focus();
    }
  }, [isPaused]);

  const handleBlur = (event) => {
    pause(true);
  };

  let interval = !isPaused ? 1000 : null;
  useInterval(() => {
    playerController(Action.SlowDrop, board, player, setPlayer, setGameOver);
  }, interval);

  const onKeyDown = (e) => {
    let action = actionForKey(e.code);

    playerController(action, board, player, setPlayer, setGameOver);
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
      onBlur={handleBlur}
      ref={inputRef}
    />
  );
};

export default Controller;
