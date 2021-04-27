import { observer } from "mobx-react";
import React from "react";
import TodoList from "./TodoList";
import todo from "../store/todo";

const TodoSection = observer(
  ({ sectionClass, header, numberOfTasks, noTasksTitle }) => {
    const todosClass = "todos todos--" + sectionClass;

    todo.state.isFetching && (noTasksTitle = "");

    return (
      <section className={todosClass}>
        <h2 className="todos__header">{header}</h2>
        {numberOfTasks === 0 ? noTasksTitle : ""}

        {sectionClass === "onhold" ? (
          <TodoList isCompleted={false} />
        ) : (
          <TodoList isCompleted={true} />
        )}
      </section>
    );
  }
);
export default TodoSection;
