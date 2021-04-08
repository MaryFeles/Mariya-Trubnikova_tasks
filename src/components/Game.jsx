import React from "react";
import StatList from "./StatList";
import ButtonList from "./ButtonList";

function Game(props) {
  const { stats, buttons, handleClick } = props;

  return (
    <div className="gameWrapper">
      <div className="col stats">
        <StatList stats={stats} />
      </div>
      <div className="col btns">
        <ButtonList buttons={buttons} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Game;
