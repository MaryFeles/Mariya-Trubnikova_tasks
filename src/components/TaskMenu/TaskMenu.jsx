import React from "react";
import { Dropdown, Button, Space } from "antd";
import task from "../../store/tasks";
import { observer } from "mobx-react";
import { iconDots } from "../../helpers/icons";
import MenuOptions from "./MenuOptions";

const TaskMenu = observer(({ taskItem }) => {
  const onHoldTaskOptions = [
    { id: 1, title: "View comments" },
    { id: 2, title: "Take the task" },
    { id: 3, title: "Complete", click() { task.completeTask(taskItem); }},
    { id: 4, title: "Edit" },
    { id: 5, title: "Cancel", click() {
      task.completeTask(taskItem);
      task.setStatus(taskItem, "Cancelled");
    }},
    { id: 6, title: "Delete", click() { task.removeTask(taskItem.id); }},
  ];

  const completedTaskOptions = [
    { id: 1, title: "View comments" },
    { id: 2, title: "Delete", click() { task.removeTask(taskItem.id); }},
    { id: 3, title: "Mark as incomplete",  click() { task.completeTask(taskItem);} },
  ];

  const getMenuOptions = (taskItem) => {
    if (!taskItem.completed) {
      return (
        <MenuOptions options={onHoldTaskOptions} taskItem={taskItem} />
      );
    } else {
      return (
        <MenuOptions options={completedTaskOptions} taskItem={taskItem} />
      );
    }
  };

  const menu = getMenuOptions(taskItem);

  return (
    <Space direction="vertical">
      <Dropdown
        className="task__dropdown"
        overlay={menu}
        placement="bottomCenter"
      >
        <Button className="task__btn" shape="circle" size={"small"}>
          {iconDots}
        </Button>
      </Dropdown>
    </Space>
  );
});

export default TaskMenu;
