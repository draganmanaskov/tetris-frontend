import { useEffect } from "react";
import Board from "../Board/Board";
import Preview from "../Preview/Preview";
import { usePlayer } from "../../hooks/usePlayer";
import Controller from "../Contoller/Controller";
import useBoard from "../../hooks/useBoard";
import useSetDrop from "../../hooks/useSetDrop";

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
  useSetDrop(player, setPlayer);

  // useEffect(() => {
  //   console.log(player);
  // }, [player]);

  return (
    <div
      className={`flex h-screen w-screen items-start justify-center bg-slate-600 pt-10 `}
    >
      <Board board={board} />
      <Preview tetrominoes={player.tetrominoes} />
      <Controller
        board={board}
        player={player}
        setPlayer={setPlayer}
        resetPlayer={resetPlayer}
      />
    </div>
  );
};

export default Game;
