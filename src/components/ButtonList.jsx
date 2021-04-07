import React from "react";
import Button from "./Button";

function ButtonList(props) {
  return (
    <ul className="btns__list">
      {props.buttons.map((button) => {
        return (
          <Button
            type={button.type}
            color={button.color}
            name={button.name}
            key={button.id}
            onClick={props.handleClick}
          />
        );
      })}
    </ul>
  );
}

export default ButtonList;
