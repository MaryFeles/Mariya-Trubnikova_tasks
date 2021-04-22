import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import todo from "../store/todo";
import { observer } from "mobx-react";

const TaskMenu = observer(({ isCompleted, status, todoItem }) => {
  const onHoldTaskOptions = [
    { id: 1, title: "View comments" },
    { id: 2, title: "Take on the task" },
    { id: 3, title: "Complete", click() {todo.completeTodo(todoItem)} },
    { id: 4, title: "Edit" },
    { id: 5, title: "Cancel" },
    { id: 6, title: "Delete" },
  ];

  const completedTaskOptions = [
    { id: 1, title: "View comments" },
    { id: 2, title: "Delete" },
    { id: 3, title: "Mark as incomplete" },
  ];

  const getMenuOptions = (isCompleted, status) => {
    if (!isCompleted) {
      return (
        <Menu>
          {onHoldTaskOptions.map((option) => {
            if (status === "In Progress") {
              return (
                option.title !== "Take on the task" && (
                  <Menu.Item key={option.id}>
                    <Button block onClick={option.click}>{option.title}</Button>
                  </Menu.Item>
                )
              );
            } else {
              return (
                option.title !== "Complete" && (
                  <Menu.Item key={option.id}>
                    <Button block>{option.title}</Button>
                  </Menu.Item>
                )
              );
            }
          })}
        </Menu>
      );
    } else {
      return (
        <Menu>
          {completedTaskOptions.map((option) => {
            return (
              <Menu.Item key={option.id}>
                <Button block>{option.title}</Button>
              </Menu.Item>
            );
          })}
        </Menu>
      );
    }
  };

  const menu = getMenuOptions(isCompleted, status);

  return (
    <Space direction="vertical">
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button shape="circle">...</Button>
      </Dropdown>
    </Space>
  );
})

export default TaskMenu;
