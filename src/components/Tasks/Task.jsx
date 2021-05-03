import React from "react";
import TaskMenu from "../TaskMenu/TaskMenu";
import task from "../../store/tasks";
import { observer } from "mobx-react";

const Task = observer(({ isCompleted }) => {
  const formatStr = (str) => {
    str = str.toLowerCase().replace(/\s/g, "");
    return str;
  };

  const { tasks } = task.state;

  const statusClass = "task__status task__status--";
  const priorityClass = "task__priority task__priority--";

  return isCompleted
    ? tasks.map((item) => {
        return (
          item.completed && (
            <li className="tasks__item task" key={item.id}>
              <span className="task__title">{item.title}</span>
              <span className={statusClass + formatStr(item.status)}>
                {item.status}
              </span>
              <span className={priorityClass + formatStr(item.priority)}>
                {item.priority}
              </span>
              <TaskMenu task={item} />
            </li>
          )
        );
      })
    : tasks.map((item) => {
        return (
          !item.completed && (
            <li className="tasks__item task" key={item.id}>
              <span className="task__title">{item.title}</span>
              <span className={statusClass + formatStr(item.status)}>
                {item.status}
              </span>
              <span className={priorityClass + formatStr(item.priority)}>
                {item.priority}
              </span>
              <TaskMenu task={item} />
            </li>
          )
        );
      });
});

export default Task;
