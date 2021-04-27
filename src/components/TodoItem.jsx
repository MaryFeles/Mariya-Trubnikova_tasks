import React from "react";
import TaskMenu from "./TaskMenu";
import { formatStr } from "./App";
import todo from "../store/todo";
import { observer } from "mobx-react";

const TodoItem = observer(({ isCompleted }) => {
  const { todos } = todo.state;
  return isCompleted
    ? todos.map((item) => {
        return (
          item.completed && (
            <li className="todos__item todo" key={item.id}>
              <span className="todo__title">{item.title}</span>
              <span
                className={
                  "todo__status todo__status--" + formatStr(item.status)
                }
              >
                {item.status}
              </span>
              <span
                className={
                  "todo__priority todo__priority--" + formatStr(item.priority)
                }
              >
                {item.priority}
              </span>
              <TaskMenu todoItem={item} />
            </li>
          )
        );
      })
    : todos.map((item) => {
        return (
          !item.completed && (
            <li className="todos__item todo" key={item.id}>
              <span className="todo__title">{item.title}</span>
              <span
                className={
                  "todo__status todo__status--" + formatStr(item.status)
                }
              >
                {item.status}
              </span>
              <span
                className={
                  "todo__priority todo__priority--" + formatStr(item.priority)
                }
              >
                {item.priority}
              </span>
              <TaskMenu todoItem={item} />
            </li>
          )
        );
      });
});

export default TodoItem;
