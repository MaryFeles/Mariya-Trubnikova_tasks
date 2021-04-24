import React from "react";
import { observer } from "mobx-react";
import todo from "../store/todo";
import TodoSection from "./TodoSection";

const Todo = observer(() => {
  return (
    <>
      <TodoSection
        sectionClass="onhold"
        header="On Hold"
        numberOfTasks={todo.numberOfIncompletedTodos}
        noTasksTitle="You have no tasks!"
      />
      <TodoSection
        sectionClass="completed"
        header="Completed"
        numberOfTasks={todo.numberOfCompletedTodos}
        noTasksTitle="You have no completed tasks!"
      />
    </>
  );
});

export default Todo;
