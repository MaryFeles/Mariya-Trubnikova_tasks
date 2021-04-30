import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const MenuOption = (props) => {
  const {title, key, handleClick} = props;
  return title === "View comments" ? (
    <Link to="/task/1">
      <Button className="menu__btn" key={key} block onClick={handleClick}>
        {title}
      </Button>
    </Link>
  ) : (
    <Button className="menu__btn" key={key} block onClick={handleClick}>
      {title}
    </Button>
  );
};

export default MenuOption;
