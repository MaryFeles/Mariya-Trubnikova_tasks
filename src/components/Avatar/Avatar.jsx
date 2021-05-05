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
    <Menu className="dropdown__menu">
      <Button className="dropdown__btn" onClick={handleClickAvatar}>
        Sign Out
      </Button>
    </Menu>
  );

  return (
    <>
      {!currentUser ? (
        <Button onClick={handleClick}>Sign In</Button>
      ) : (
        <div>
          <Dropdown
            className="task__dropdown dropdown"
            overlay={menu}
            placement="bottomRight"
          >
            <div className={"header__avatar-wrap user-avatar"}>
              <Avatar
                src={`/avatars/${currentUser.avatar}`}
                className={"header__avatar"}
                size={26}
              />
            </div>
          </Dropdown>
        </div>
      )}
    </>
  );
});

export default CurrentUserAvatar;
