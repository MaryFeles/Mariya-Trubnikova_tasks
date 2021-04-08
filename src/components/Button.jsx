import React from "react";

function Button(props) {
  const { type, name, color, onClick } = props;
  let buttonClasses = ["btns__item", "btn", "btn--" + color, "bgc-" + color];
  return (
    <button className={buttonClasses.join(" ")} onClick={() => onClick(type)}>
      {name}
    </button>
  );
}

export default Button;
