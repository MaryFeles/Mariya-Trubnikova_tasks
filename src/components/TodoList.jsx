import React from "react";
import TodoItem from "./TodoItem";
import todo from "../store/todo";
import { observer } from "mobx-react";
import Preloader from "./Preloader";

const TodoList = observer(({ isCompleted }) => {
  return (
    <ul className="todos__list">
      {todo.state.isFetching ? (
        <Preloader />
      ) : (
        <TodoItem isCompleted={isCompleted} />
      )}
    </ul>
  );
});

export default TodoList;
