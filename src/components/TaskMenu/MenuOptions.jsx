import React from "react";
import { Menu } from "antd";
import MenuOption from "./MenuOption";

const MenuOptions = ({ options, taskItem }) => {
  return (
    <Menu>
      {options.map((option) => {
        if (taskItem.status === "In Progress") {
          return (
            option.title !== "Take on the task" && (
              <MenuOption
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
