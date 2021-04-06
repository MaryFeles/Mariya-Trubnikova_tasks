import React from "react";

function Button(props) {
  const { type, name } = props;
  let buttonClasses = ["btns__item", "btn", "btn--" + type, "bgc-" + type];

  return <button className={buttonClasses.join(" ")}>{name}</button>;
}

export default Button;
