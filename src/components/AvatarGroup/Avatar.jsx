import React from "react";
import { Avatar, Tooltip } from "antd";

const UserAvatar = ({ user }) => (
  <Tooltip title={user.name + " " + user.surname} placement="top">
    <Avatar size="small" src={`avatars/${user.avatar}`} />
  </Tooltip>
);

export default UserAvatar;
