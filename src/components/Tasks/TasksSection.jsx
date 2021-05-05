import { observer } from "mobx-react";
import React from "react";
import TasksList from "./TasksList";
import task from "../../store/tasks";
import Layout, { Content } from "antd/lib/layout/layout";

const TasksSection = observer(
  ({ sectionClass, header, numberOfTasks, noTasksTitle }) => {
    const tasksClass = "tasks tasks--" + sectionClass;

    task.state.isFetching && (noTasksTitle = "");

    return (
      <section className={tasksClass}>
        <h2 className="tasks__header">{header}</h2>
        {numberOfTasks === 0 ? noTasksTitle : ""}

        {sectionClass === "onhold" ? (
          <Content style={{
        overflow: 'auto',
        height: '30vh',
      }} ><TasksList isCompleted={false} /></Content>
        ) : (
          <Content style={{
        overflow: 'auto',
        height: '20vh',
      }} ><TasksList isCompleted={true} /></Content>
        )}
      </section>
    );
  }
);
export default TasksSection;
