import { useEffect } from "react";
import Board from "../Board/Board";
import Preview from "../Preview/Preview";
import { usePlayer } from "../../hooks/usePlayer";
import Controller from "../Contoller/Controller";
import useBoard from "../../hooks/useBoard";

import useGameStats from "../../hooks/useGameStats";
import GameStats from "../GameStats/GameStats";
import usePause from "../../hooks/usePause";
import useMultiplier from "../../hooks/useMultiplier";

const Game = ({ columns, rows, setGameOver, isPaused, pause }) => {
  const [player, setPlayer, resetPlayer] = usePlayer();
  let addLinesCleared = false;
  const [multiplier, setMultiplier] = useMultiplier();
  const [gameStats, setGameStatsHandler, resetGameStats] = useGameStats(
    player,
    multiplier
  );

  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
    setMultiplier,
  });

  return (
    <div className={"flex  pt-10 "}>
      <Board board={board} />
      <div>
        <Preview tetrominoes={player.tetrominoes} />
        <GameStats stats={gameStats} />
      </div>
      <div>
        <Controller
          board={board}
          player={player}
          setPlayer={setPlayer}
          setGameOver={setGameOver}
          isPaused={isPaused}
          pause={pause}
        />
      </div>
    </div>
  );
};

export default Game;
