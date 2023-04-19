import { useState } from "react";

const useMultiplier = () => {
  const [multipler, setMultipler] = useState(0);
  return [multipler, setMultipler];
};

export default useMultiplier;
