import React from "react";
import { observer } from "mobx-react";
import TodoItem from "./TodoItem";

const TodoList = observer(({ isCompleted }) => {
  return (
    <ul className="todos__list">
      <TodoItem isCompleted={isCompleted} />
    </ul>
  );
});

export default TodoList;
