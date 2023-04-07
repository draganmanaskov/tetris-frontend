import { useEffect } from "react";
import Board from "../Board/Board";
import Preview from "../Preview/Preview";
import { usePlayer } from "../../hooks/usePlayer";
import Controller from "../Contoller/Controller";
import useBoard from "../../hooks/useBoard";

const Game = ({ columns, rows }) => {
  const [player, setPlayer, resetPlayer] = usePlayer();
  let addLinesCleared = false;
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  useEffect(() => {
    console.log(player);
  }, [player]);

  return (
    <div
      className={`flex h-screen w-screen items-start justify-center bg-slate-600 pt-10 `}
    >
      <Board board={board} />
      <Preview tetrominoes={player.tetrominoes} />
      <Controller player={player} setPlayer={setPlayer} />
    </div>
  );
};

export default Game;
