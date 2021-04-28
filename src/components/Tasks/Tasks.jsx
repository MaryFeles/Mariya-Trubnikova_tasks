import React from "react";
import { observer } from "mobx-react";
import task from "../../store/tasks";
import TasksSection from "./TasksSection";

const Tasks = observer(() => {
  return (
    <>
      <TasksSection
        sectionClass="onhold"
        header="On Hold"
        numberOfTasks={task.numberOfIncompletedTasks}
        noTasksTitle="You have no tasks!"
      />
      <TasksSection
        sectionClass="completed"
        header="Completed"
        numberOfTasks={task.numberOfCompletedTasks}
        noTasksTitle="You have no completed tasks!"
      />
    </>
  );
});

export default Tasks;
