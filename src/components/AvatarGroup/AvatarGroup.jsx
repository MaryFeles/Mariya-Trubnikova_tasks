import React from "react";
import { Avatar } from "antd";
import UserAvatar from "./Avatar";
import usersStore from "../../store/users";
import { observer } from "mobx-react";

const AvatarGroup = observer(({ task }) => {
  const { users } = usersStore.state;

  let executors = task.users.filter((item) => item.roles.includes("executor"));
  let creators = task.users.filter(
    (item) => item.roles.includes("creator") && !executors.includes(item)
  );
  let commentators = task.users.filter(
    (item) => !creators.includes(item) && !executors.includes(item)
  );

  let sorted = executors.concat(creators).concat(commentators);

  return (
    <Avatar.Group
      maxCount={4}
      size="small"
      maxStyle={{
        backgroundColor: "#6FCF97",
        fontSize: "9px",
      }}
    >
      {sorted.map((item) => {
        item = users.find((user) => user.id == item.id);
        return <UserAvatar key={item.id} user={item} />;
      })}
    </Avatar.Group>
  );
});

export default AvatarGroup;
