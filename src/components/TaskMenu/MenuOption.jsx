import React from "react";
import { Button } from "antd";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";

const MenuOption = observer((props) => {
  const { task, title, key, handleClick } = props;
  const history = useHistory();

  const handleViewComments = (e) => {
    e.preventDefault();
    history.push(`/task/${task.id}`);
  };

  return title === "View comments" ? (
    <Button
      className="menu__btn"
      key={key}
      block
      onClick={(e) => {
        handleViewComments(e);
      }}
    >
      {title}
    </Button>
  ) : (
    <Button className="menu__btn" key={key} block onClick={handleClick}>
      {title}
    </Button>
  );
});

export default MenuOption;
