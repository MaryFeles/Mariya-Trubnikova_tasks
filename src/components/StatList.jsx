import React from "react";
import Stat from "./Stat";

function StatList(props) {
  return (
    <ul className="stats__list">
      {props.stats.map((stat) => {
        return <Stat key={stat.id} type={stat.type} name={stat.name} indicator={stat.indicator} btn={props.clickedBtn} />;
      })}
    </ul>
  );
}

export default StatList;
