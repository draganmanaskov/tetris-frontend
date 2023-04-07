import React from "react";

const Controller = ({ player, setPlayer }) => {
  const onKeyDown = (e) => {
    let tempPlayer = { ...player };

    console.log(e.code);
    if (e.code === "ArrowLeft") {
      console.log(tempPlayer.position.column);
      // if (tempPlayer.position.column == 0) {
      //   return;
      // }
      tempPlayer.position.column -= 1;
      setPlayer(tempPlayer);
    }

    if (e.code === "ArrowRight") {
      console.log("et");
      tempPlayer.position.column += 1;
      setPlayer(tempPlayer);
    }

    if (e.code === "ArrowUp") {
      console.log("et");
      tempPlayer.position.row -= 1;
      setPlayer(tempPlayer);
    }

    if (e.code === "ArrowDown") {
      console.log("et");
      tempPlayer.position.row += 1;
      setPlayer(tempPlayer);
    }
    console.log(player);
  };

  const onKeyUp = () => {
    console.log("key up");
  };

  return (
    <input
      className="GameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
    />
  );
};

export default Controller;
