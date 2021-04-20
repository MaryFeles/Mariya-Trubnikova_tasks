import React from "react";
import { observer } from "mobx-react";
import todo from "../store/todo";
import { formatStr } from "./App";

const Todo = observer(() => {
  return (
    <section className="todos todos--onhold">
      <h2 className="todos__header">On Hold</h2>
      {todo.numberOfPendingTodos === 0 ? "You have no tasks!" : ""}
      <ul className="todos__list">
        {todo.todos.map((item) => {
          return (
            !item.completed && (
              <li className="todos__item todo" key={item.id}>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => todo.completeTodo(item)}
                />
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
                <button onClick={() => todo.removeTodo(item.id)}>x</button>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
});

export default Todo;
