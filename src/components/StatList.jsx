import React from "react";
import Stat from "./Stat";

function StatList(props) {
  return (
    <ul className="stats__list">
      {props.stats.map((stat) => {
        return <Stat type={stat.type} name={stat.name} key={stat.id} />;
      })}
    </ul>
  );
}

export default StatList;
