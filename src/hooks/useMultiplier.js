import { useState } from "react";

const useMultiplier = () => {
  const [multipler, setMultipler] = useState({
    combo: 0,
    rowsClearedThisTurn: 0,
  });
  return [multipler, setMultipler];
};

export default useMultiplier;
