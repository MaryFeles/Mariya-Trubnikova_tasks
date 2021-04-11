import React from "react";

function Stat (props) {
  const { type, name, indicator } = props;
  const statClasses = ["stats__item", "stat", "stat--" + type];
  const statIndicatorClasses = ["stats__indicator", "bgc-" + type];
  
  return (
    <li className={statClasses.join(" ")}>
      <span className="stats__name">{name}</span>
      <div className="stats__indicator-wrapper">
        <div
          className={statIndicatorClasses.join(" ")}
          style={{ width: indicator + "%" }}
        ></div>
      </div>
    </li>
  );
}

export default Stat;
