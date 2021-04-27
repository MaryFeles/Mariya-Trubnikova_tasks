import { observer } from "mobx-react";
import React from "react";
import todo from "../store/todo";

const Counter = observer(() => {
  return <>{todo.numberOfIncompletedTodos}</>;
});

export default Counter;
