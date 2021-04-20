import React from "react";
import todo from "../store/todo";
import { observer } from "mobx-react";

const CompletedTodo = observer(() => {
  return (
    <section className="todos todos--completed">
      <h2 className="todos__header">Completed</h2>
      <ul className="todos__list">
        {todo.todos.map((item) => {
          return (
            item.completed && (
              <li className="todos__item" key={item.id}>
                {item.title}
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
});

export default CompletedTodo;
