import React from "react";

function ActionList(props) {
  const { actionList, dataBtn, changeStats } = props;
  return dataBtn === "active" ? (
    <ul className="controls__actions actions">
      {actionList.map((item) => {
        return (
          <li className="actions__item" key={item.id}>
            <button className="actions__btn btn" onClick={() => changeStats(item.stats)}>{item.value}</button>
          </li>
        );
      })}
    </ul>
  ) : (
    ""
  );
}

export default ActionList;
