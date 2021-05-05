import React from "react";
import TaskMenu from "../TaskMenu/TaskMenu";
import tasksStore from "../../store/tasks";
import { observer } from "mobx-react";
import AvatarGroup from "../AvatarGroup/AvatarGroup";

const Task = observer(({ isCompleted }) => {
  const formatStr = (str) => {
    str = str.toLowerCase().replace(/\s/g, "");
    return str;
  };

  const { tasks } = tasksStore.state;

  const statusClass = "task__status task__status--";
  const priorityClass = "task__priority task__priority--";

  return isCompleted
    ? tasks.map((task) => {
        return (
          task.completed && (
            <li className="tasks__item task" key={task.id}>
              <span className="task__title">{task.title}</span>
              <span className={statusClass + formatStr(task.status)}>
                {task.status}
              </span>
              <span className={priorityClass + formatStr(task.priority)}>
                {task.priority}
              </span>
              <AvatarGroup task={task}/>
              <TaskMenu task={task} />
            </li>
          )
        );
      })
    : tasks.map((task) => {
        return (
          !task.completed && (
            <li className="tasks__item task" key={task.id}>
              <span className="task__title">{task.title}</span>
              <span className={statusClass + formatStr(task.status)}>
                {task.status}
              </span>
              <span className={priorityClass + formatStr(task.priority)}>
                {task.priority}
              </span>
              <AvatarGroup task={task}/>
              <TaskMenu task={task} />
            </li>
          )
        );
      });
});

export default Task;
