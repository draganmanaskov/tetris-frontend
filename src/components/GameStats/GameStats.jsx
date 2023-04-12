import React from "react";

const GameStats = ({ stats }) => {
  return (
    <div className="">
      <StatsWindow title={"Level"} value={stats.level} color={"red-500"} />
      <StatsWindow title={"Score"} value={stats.score} color={"yellow-500"} />
      <StatsWindow title={"Time"} value={stats.time} color={"green-500"} />
    </div>
  );
};

export default GameStats;

const StatsWindow = ({ title, value, color }) => {
  return (
    <div
      className={`relative m-2 rounded-lg border-4 border-${color} bg-gray-800 p-4 shadow-md`}
    >
      <div className="flex items-center text-4xl font-bold text-white">
        <div className={`mr-2 h-4 w-4 rounded-full bg-${color}`}></div>
        {value}
      </div>
      <h3 className="mt-2 text-sm uppercase tracking-wider text-gray-400">
        {title}
      </h3>
    </div>
  );
};
