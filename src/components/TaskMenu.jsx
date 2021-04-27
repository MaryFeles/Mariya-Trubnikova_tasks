import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import todo from "../store/todo";
import { observer } from "mobx-react";
import { iconDots } from "../helpers/icons";

const TaskMenu = observer(({ todoItem }) => {
  const onHoldTaskOptions = [
    { id: 1, title: "View comments" },
    { id: 2, title: "Take the task" },
    { id: 3, title: "Complete", click() { todo.completeTodo(todoItem); }},
    { id: 4, title: "Edit" },
    { id: 5, title: "Cancel", click() {
      todo.completeTodo(todoItem);
      todo.setStatus(todoItem, "Cancelled");
    }},
    { id: 6, title: "Delete", click() { todo.removeTodo(todoItem.id); }},
  ];

  const completedTaskOptions = [
    { id: 1, title: "View comments" },
    { id: 2, title: "Delete", click() { todo.removeTodo(todoItem.id); }},
    { id: 3, title: "Mark as incomplete",  click() { todo.completeTodo(todoItem);} },
  ];

  const getMenuOptions = (todoItem) => {
    if (!todoItem.completed) {
      return (
        <Menu>
          {onHoldTaskOptions.map((option) => {
            if (todoItem.status === "In Progress") {
              return (
                option.title !== "Take on the task" && (
                  <Menu.Item key={option.id}>
                    <Button className="menu__btn" block onClick={option.click}>
                      {option.title}
                    </Button>
                  </Menu.Item>
                )
              );
            } else {
              return (
                option.title !== "Complete" && (
                  <Menu.Item key={option.id}>
                    <Button className="menu__btn" block onClick={option.click}>
                      {option.title}
                    </Button>
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
                <Button block onClick={option.click}>
                  {option.title}
                </Button>
              </Menu.Item>
            );
          })}
        </Menu>
      );
    }
  };

  const menu = getMenuOptions(todoItem);

  return (
    <Space direction="vertical">
      <Dropdown
        className="todo__dropdown"
        overlay={menu}
        placement="bottomCenter"
      >
        <Button className="todo__btn" shape="circle" size={"small"}>
          {iconDots}
        </Button>
      </Dropdown>
    </Space>
  );
});

export default TaskMenu;
