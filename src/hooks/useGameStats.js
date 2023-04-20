import { useEffect, useState, useCallback, useRef, useMemo } from "react";
const initialState = {
  level: 1,
  score: 0,
  time: 0,
  highestScore: 0,
};

const useGameStats = (player, multiplier) => {
  const [gameStats, setGameStats] = useState(initialState);
  let { score } = gameStats;

  const prevValueRef = useRef();

  // useEffect(() => {
  //   setGameStatsHandler(multiplier);
  // }, [multiplier]);

  const setGameStatsHandler = (multiplier) => {
    console.log("test");
    const { combo, rowsClearedThisTurn: rowsCleared } = multiplier;

    const scoreEarned = calclateScore(combo, rowsCleared);

    setGameStats((prevState) => ({
      ...prevState,
      score: (prevState.score += scoreEarned),
    }));
  };

  useMemo(() => setGameStatsHandler(multiplier), [multiplier]);

  const resetGameStats = useCallback(() => {
    setGameStats((prev) => ({
      ...initialState,
      highestScore: prev.highestScore,
    }));
  }, []);

  return [gameStats, setGameStatsHandler, resetGameStats];
};

export default useGameStats;

const calclateScore = (combo, rowsCleared) => {
  let score = 0;
  switch (rowsCleared) {
    case 1:
      score = 100;
      break;
    case 2:
      score = 300;
      break;
    case 3:
      score = 500;
      break;
    case 4:
      score = 800;
      break;
    default:
      break;
  }

  if (combo === 0) {
    return score;
  }

  return score * combo;
};
