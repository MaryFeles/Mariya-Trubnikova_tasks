import React, { useState } from "react";
import Button from "./Button";
import ActionList from "./ActionList";

function ContolList(props) {
  const { controls, changeStats } = props;
  let [btnType, setBtnType] = useState("");
  let [dataBtn, setDataBtn] = useState("non-active");

  function handleClick(e, type) {
    setBtnType((btnType = type));

    if (e.target.getAttribute("data-btn") === "non-active") {
      e.target.setAttribute("data-btn", "active");
    } else e.target.setAttribute("data-btn", "non-active");

    setDataBtn((dataBtn = e.target.getAttribute("data-btn")));
  }

  return (
    <ul className="controls__list">
      {controls.map((control) => {
        return (
          <li key={control.id} className="controls__item">
            <Button
              type={control.type}
              color={control.color}
              value={control.value}
              key={control.id}
              handleClick={handleClick}
            />
            {control.type === btnType && (
              <ActionList
                actionList={control.actionList}
                dataBtn={dataBtn}
                changeStats={changeStats}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
export default ContolList;
