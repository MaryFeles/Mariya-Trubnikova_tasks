import React from "react";

function Button(props) {
  const { type, name, color, handleClick } = props;
  const buttonClasses = ["btns__item", "btn", "btn--" + color, "bgc-" + color];

  return (
    <button className={buttonClasses.join(" ")} onClick={() => handleClick(type)}>
      {name}
    </button>
  );
}

export default Button;
