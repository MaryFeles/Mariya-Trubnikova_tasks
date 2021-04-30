import { Avatar } from "antd";
import users from "../../store/users";
import { observer } from "mobx-react";

const CurrentUserAvatar = observer(({ handleClick }) => {
  const { currentUser } = users.state;
  console.log(currentUser);
  
  const handleClickAvatar = () => {
    console.log("clicked avatar");
  };

  return (
    <>
      {currentUser == "" ? (
        <span className={"signin"} onClick={handleClick}>
          Sign In
        </span>
      ) : (
        <div>
          <Avatar
            src={currentUser.avatar}
            className={"user-avatar"}
            size={26}
            onClick={handleClickAvatar}
          ></Avatar>
        </div>
      )}
    </>
  );
});

export default CurrentUserAvatar;
