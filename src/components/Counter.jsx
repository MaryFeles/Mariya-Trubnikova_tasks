import { observer } from "mobx-react";
import React from "react";
import counter from "../store/counter";

const Counter = observer(() => {
  return <>{counter.count}</>;
});

export default Counter;
