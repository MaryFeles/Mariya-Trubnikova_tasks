import React from "react";
import todo from "../store/todo";
import { observer } from "mobx-react";
import { formatStr } from "./App";
import TaskMenu from "./TaskMenu";

const CompletedTodo = observer(() => {
  return (
    <section className="todos todos--completed">
      <h2 className="todos__header">Completed</h2>
      <ul className="todos__list">
        {todo.todos.map((item) => {
          return (
            item.completed && (
              <li className="todos__item todo" key={item.id}>
                <span className="todo__title">{item.title}</span>
                <span
                  className={
                    "todo__status" +
                    " " +
                    "todo__status--" +
                    formatStr(item.status)
                  }
                >
                  {item.status}
                </span>
                <span
                  className={
                    "todo__priority" +
                    " " +
                    "todo__priority--" +
                    formatStr(item.priority)
                  }
                >
                  {item.priority}
                </span>
                <TaskMenu isCompleted={item.completed} />
                <button onClick={() => todo.removeTodo(item.id)}>x</button>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
});

export default CompletedTodo;
