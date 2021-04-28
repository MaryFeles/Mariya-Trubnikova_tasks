import { observer } from "mobx-react";
import React from "react";
import task from "../../store/tasks";

const Counter = observer(() => {
  return <>{task.numberOfIncompletedTasks}</>;
});

export default Counter;
