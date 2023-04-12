import { useEffect, useState, useCallback } from "react";
const initialState = {
  level: 1,
  score: 0,
  time: 0,
  multiplier: 0,
  highestScore: 0,
  reactStrictModeTracker: 0,
};

const useGameStats = (player) => {
  const [gameStats, setGameStats] = useState(initialState);
  let { multiplier, score } = gameStats;

  const setGameStatsHandler = useCallback((rowsCleared) => {
    console.log(player);
    if (rowsCleared >= 2 && multiplier <= 4) {
      multiplier++;
    } else {
      multiplier = 0;
    }
    const scoreEarned = calclateScore(rowsCleared, multiplier);
    console.log(rowsCleared, multiplier, scoreEarned);
    setGameStats((prevState) => ({
      ...prevState,
      multiplier,
      score: (prevState.score += scoreEarned),
      reactStrictModeTracker: prevState.reactStrictModeTracker++,
    }));
  }, []);

  const resetGameStats = useCallback(() => {
    setGameStats((prev) => ({
      ...initialState,
      highestScore: prev.highestScore,
    }));
  }, []);

  return [gameStats, setGameStatsHandler, resetGameStats];
};

export default useGameStats;

const calclateScore = (rows, multiplier) => {
  let score = 0;
  switch (rows) {
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

  if (!multiplier) {
    return score;
  }
  return score * multiplier;
};
