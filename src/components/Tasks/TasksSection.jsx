import { observer } from "mobx-react";
import React from "react";
import TasksList from "./TasksList";
import task from "../../store/tasks";
import { Content } from "antd/lib/layout/layout";

const TasksSection = observer(
  ({ sectionClass, header, numberOfTasks, noTasksTitle }) => {
    const tasksClass = "tasks tasks--" + sectionClass;

    task.state.isFetching && (noTasksTitle = "");

    return (
      <section className={tasksClass}>
        <h2 className="tasks__header">{header}</h2>
        {numberOfTasks === 0 ? noTasksTitle : ""}

        {sectionClass === "onhold" ? (
          <Content><TasksList isCompleted={false} /></Content>
        ) : (
          <Content><TasksList isCompleted={true} /></Content>
        )}
      </section>
    );
  }
);
export default TasksSection;
