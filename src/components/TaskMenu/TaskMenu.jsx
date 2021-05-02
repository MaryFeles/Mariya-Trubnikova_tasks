import React from "react";
import { Dropdown, Button, Space } from "antd";
import task from "../../store/tasks";
import { observer } from "mobx-react";
import { iconDots } from "../../helpers/icons";
import MenuOptions from "./MenuOptions";
import users from "../../store/users";

const TaskMenu = observer(({ taskItem }) => {
  const { currentUser } = users.state;

  let onHoldTaskOptions = [
    { id: 1, title: "View comments" },
    { id: 2, title: "Take the task" },
    { id: 3, title: "Complete", click() { task.completeTask(taskItem); }},
    { id: 5, title: "Cancel", click() {
      task.completeTask(taskItem);
      task.setStatus(taskItem, "Cancelled");
    }}
  ];

  let completedTaskOptions = [
    { id: 1, title: "View comments" },
    { id: 2, title: "Mark as incomplete",  click() { task.completeTask(taskItem);} },
  ];

  let currentUserTaskRole = taskItem.users.find(item => item.id == currentUser.id);

  if (currentUserTaskRole && currentUserTaskRole.role == 'creator') {
    let onHoldTaskAdditionalOptions = [
      { id: 4, title: "Edit" },
      { id: 6, title: "Delete", click() { task.removeTask(taskItem.id); }}
    ]

    onHoldTaskOptions = onHoldTaskOptions.concat(onHoldTaskAdditionalOptions);
    completedTaskOptions.push({ id: 3, title: "Delete", click() { task.removeTask(taskItem.id); }});
  };

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
        trigger={['click']}
        className="task__dropdown"
        overlay={menu}
        placement="bottomCenter"
      >
        <Button
          className="task__btn"
          shape="circle"
          size={"small"}
          onClick={e => e.preventDefault()}
        >
          {iconDots}
        </Button>
      </Dropdown>
    </Space>
  );
});

export default TaskMenu;
