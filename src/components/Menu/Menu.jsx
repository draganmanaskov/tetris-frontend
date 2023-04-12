import React from "react";
import Game from "../Game/Game";
import { useGameOver } from "../../hooks/useGameOver";
import usePause from "../../hooks/usePause";
import PauseScreen from "../PauseScreen/PauseScreen";

const Menu = () => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [isPaused, pause] = usePause();
  const unPause = () => {
    pause(false);
  };

  const start = () => resetGameOver();
  return (
    <div
      className={`flex h-screen w-screen items-start justify-center bg-slate-600`}
    >
      {gameOver ? (
        <button onClick={start}>Start</button>
      ) : (
        <Game
          columns={10}
          rows={20}
          setGameOver={setGameOver}
          isPaused={isPaused}
          pause={pause}
        />
      )}
      {isPaused ? <PauseScreen unPause={unPause} /> : null}
    </div>
  );
};

export default Menu;
