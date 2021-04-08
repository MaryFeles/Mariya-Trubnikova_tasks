import React, { useState } from "react";
import StatList from "./StatList";
import ButtonList from "./ButtonList";
import Stat from "./Stat";

function Game(props) {
  const { stats, buttons } = props;

  // const [ stats2, setStats] = useState(stats);

  function handleClick(typeBtn) {

    console.log(typeBtn);


    stats.forEach(stat => {

      switch (typeBtn) {
        case "eat":
          if (stat.type === 'health')
            stat.indicator -= 10;
          console.log("stat.indicator", stat.indicator);
          break;
        case "drink": return typeBtn;
          break;
        case "relax": return typeBtn;
          break;
        case "work": return typeBtn;
          break;
      }
    })

  }

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
