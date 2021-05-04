import { Avatar, Dropdown, Button, Menu } from "antd";
import users from "../../store/users";
import { observer } from "mobx-react";

const CurrentUserAvatar = observer(({ handleClick }) => {
  const { currentUser } = users.state;

  const handleClickAvatar = () => {
    users.deleteCurrentUser();
    users.setStatusLogin("");
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={handleClickAvatar}>Sign Out</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {!currentUser ? (
        <Button className={"signin"} onClick={handleClick}>
          Sign In
        </Button>
      ) : (
        <div>
          <Dropdown
            className="task__dropdown"
            overlay={menu}
            placement="bottomRight"
          >
            <Avatar
              src={`/avatars/${currentUser.avatar}`}
              className={"user-avatar"}
              size={26}
            />
          </Dropdown>
        </div>
      )}
    </>
  );
});

export default CurrentUserAvatar;
