import React from "react";
import { Dropdown, Button, Space } from "antd";
import tasks from "../../store/tasks";
import { observer } from "mobx-react";
import { iconDots } from "../../helpers/icons";
import MenuOptions from "./MenuOptions";
import users from "../../store/users";

const TaskMenu = observer(({ task }) => {
  const { currentUser } = users.state;
  const includesExecutor = task.users.find((user) => user.role === "executor");

  const handlerTakeTheTaskBtn = () => {
    if (includesExecutor) {
      return;
    } else {
      tasks.addUserRoleToTask(task, currentUser.id, "executor");
      tasks.setStatus(task, "In Progress");
    }
  };

  const handlerMarkAsIncompleteBtn = () => {
    tasks.completeTaskToggle(task);
    let executorIndex = task.users.indexOf(includesExecutor);
    executorIndex != -1 && task.users.splice(executorIndex);
    tasks.updateTask(task);
  };

  let onHoldTaskOptions = [
    { id: 1, title: "View comments" },
    { id: 3, title: "Complete", click() {tasks.completeTaskToggle(task)}},
    { id: 4, title: "Cancel", click() {
        tasks.completeTaskToggle(task);
        tasks.setStatus(task, "Cancelled");
      },
    },
  ];

  let completedTaskOptions = [
    { id: 1, title: "View comments" },
    { id: 2, title: "Mark as incomplete", click() {handlerMarkAsIncompleteBtn()}},
  ];

  let recordOfCurUserInTask;
  currentUser &&
    (recordOfCurUserInTask = task.users.find(
      (item) => item.id === currentUser.id
    ));

  if (recordOfCurUserInTask && recordOfCurUserInTask.roles.includes("creator")) {
    let onHoldTaskAdditionalOptions = [
      { id: 5, title: "Delete", click() {tasks.removeTask(task.id)}},
    ];

    onHoldTaskOptions = onHoldTaskOptions.concat(onHoldTaskAdditionalOptions);
    completedTaskOptions.push({
      id: 3,
      title: "Delete",
      click() {
        tasks.removeTask(task.id);
      },
    });
  }

  if (!includesExecutor) {
    onHoldTaskOptions.push({
      id: 2,
      title: "Take the task",
      click() {
        handlerTakeTheTaskBtn();
      },
    });
  }

  if (!currentUser) {
    onHoldTaskOptions = [{ id: 1, title: "View comments" }];
    completedTaskOptions = [{ id: 1, title: "View comments" }];
  }

  const getMenuOptions = (task) => {
    if (!task.completed) {
      return <MenuOptions options={onHoldTaskOptions} task={task} />;
    } else {
      return <MenuOptions options={completedTaskOptions} task={task} />;
    }
  };

  const menu = getMenuOptions(task);

  return (
    <Space direction="vertical">
      <Dropdown
        trigger={["click"]}
        className="dropdown task__dropdown"
        overlay={menu}
        placement="bottomCenter"
      >
        <Button
          className="task__btn"
          shape="circle"
          size={"small"}
          onClick={(e) => e.preventDefault()}
        >
          {iconDots}
        </Button>
      </Dropdown>
    </Space>
  );
});

export default TaskMenu;
