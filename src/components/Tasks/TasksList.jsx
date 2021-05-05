import React from "react";
import Task from "./Task";
import task from "../../store/tasks";
import { observer } from "mobx-react";
import Preloader from "../Preloader/Preloader";
import { Content } from "antd/lib/layout/layout";

const TasksList = observer(({ isCompleted }) => {
  return (
    <ul className="tasks__list">
      {task.state.isFetching ? (
        <Preloader />
      ) : (
        <Task isCompleted={isCompleted} />
      )}
    </ul>
  );
});

export default TasksList;
