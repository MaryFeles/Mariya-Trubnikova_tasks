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
        {sectionClass === "completed" ? (
          <>
            <div className="tasks__header-wrap">
            <h2 className="tasks__header">{header}</h2>
            <button 
              className="inactive-btn"
              data-active={task.sectionIsVisible}
              onClick={() => {task.toggleSectionVisible()}}
            >
            {task.sectionIsVisible ? "Active" : "Inactive"}
            </button>          
            </div>
          </>
        ) : (
          <h2 className="tasks__header">{header}</h2>
        )}

        {numberOfTasks === 0 ? noTasksTitle : ""}

        {sectionClass === "onhold" ? (
          <Content><TasksList isCompleted={false} /></Content>
        ) : (
          <Content style={{position: "relative"}}>
            {task.sectionIsVisible ? "" : <div className="overlay"></div>}
            <TasksList isCompleted={true} className="tasks__list tasks__list--completed" />
          </Content>
        )}
      </section>
    );
  }
);
export default TasksSection;
