import React from "react";
import Task from "./Task";
import task from "../../store/tasks";
import { observer } from "mobx-react";
import Preloader from "../Preloader/Preloader";

const TasksList = observer(({ isCompleted, className}) => {
  return (
    <ul className="tasks__list">
      {task.state.isFetching ? (
        <Preloader />
      ) : (
        <Task isCompleted={isCompleted} className={className} />
      )}
    </ul>
  );
});

export default TasksList;
