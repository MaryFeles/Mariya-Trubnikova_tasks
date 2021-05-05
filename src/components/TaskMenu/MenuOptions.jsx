import React from "react";
import { Menu } from "antd";
import MenuOption from "./MenuOption";

const MenuOptions = ({ options, task }) => {
  return (
    <Menu className="dropdown__menu">
      {options.map((option) => {
        if (task.status === "In Progress") {
          return (
            option.title !== "Take on the task" && (
              <MenuOption
                task={task}
                key={option.id}
                handleClick={option.click}
                title={option.title}
              />
            )
          );
        } else {
          return (
            option.title !== "Complete" && (
              <MenuOption
                task={task}
                key={option.id}
                handleClick={option.click}
                title={option.title}
              />
            )
          );
        }
      })}
    </Menu>
  );
};

export default MenuOptions;
