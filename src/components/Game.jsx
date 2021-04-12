import React from "react";
import StatList from "./StatList";
import ContolList from "./ControlList";

function Game(props) {
  const { stats, controls, changeStats } = props;

  return (
    <div className="gameWrapper">
      <div className="col stats">
        <StatList stats={stats} />
      </div>
      <div className="col controls">
        <ContolList controls={controls} changeStats={changeStats} />
      </div>
    </div>
  );
}

export default Game;
