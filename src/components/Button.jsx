import React from "react";
import counter from "../store/counter";

const Button = () => {
  return (
    <button className="btn btn--addTask" onClick={() => counter.increment()}>
      Add New
    </button>
  );
};

export default Button;
