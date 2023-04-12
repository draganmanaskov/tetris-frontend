import { useState } from "react";

const usePause = () => {
  const [isPaused, setIsPaused] = useState(false);

  return [isPaused, setIsPaused];
};

export default usePause;
