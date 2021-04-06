import React from "react";

function Stat(props) {
  const { type, name } = props;
  let statClasses = ["stats__item", "stat", "stat--" + type];
  let statusBarClasses = ["status-bar", "bgc-" + type];

  return (
    <li className={statClasses.join(" ")}>
      <span className="stats__name">{name}</span>
      <div className="status-bar-wrapper">
        <div className={statusBarClasses.join(" ")}></div>
      </div>
    </li>
  );
}

export default Stat;
