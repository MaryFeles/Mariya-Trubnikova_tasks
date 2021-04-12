import React from "react";

function Button(props) {
  const { type, value, color, handleClick} = props;
  const buttonClasses = ["controls__btn", "btn", "btn--" + color, "bgc-" + color];

  return (
    <button className={buttonClasses.join(" ")} data-btn="non-active" onClick={(e) => handleClick(e, type)}>
      {value}
    </button>
  );
}

export default Button;
