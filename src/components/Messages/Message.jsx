import React from "react";
import { Avatar } from "antd";
import moment from "moment";

const Message = ({
  className,
  author,
  message,
  title,
  type,
  isCurrentUser,
  task,
}) => {
  const messageClass = "message__";
  if (!isCurrentUser) {
    return (
      <div className={className + " " + "left"}>
        <div className={messageClass + "header"}>
          <div className={messageClass + "avatar-wrap"}>
            <Avatar
              className={messageClass + "avatar"}
              src={`avatars/${author.avatar}`}
            />
          </div>

          <div className={messageClass + "info"}>
            <span className={messageClass + "author"}>
              {author.name + " " + author.surname}
            </span>
            <span className={messageClass + "date"}>
              {moment(message.date).fromNow()}
            </span>

            <span className={messageClass + "title"}>{title}</span>
          </div>
        </div>

        {type === "comment" ? (
          <p className={messageClass + "body message__body--" + message.type}>
            {message.body}
          </p>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return message.type === "creation" ? (
      <div className={className + " " + "right"}>
        <div className={messageClass + "body message__body--" + message.type}>
          <span className={messageClass + "curuser-title"}>{title}</span>
          <span className={messageClass + "date"}>
            {moment(message.date).fromNow()}
          </span>

          <p className={messageClass + "body--curuser"}>"{task}"</p>
        </div>
      </div>
    ) : (
      <div className={className + " " + "right right--comment"}>
        <span className={messageClass + "date"}>
          {moment(message.date).fromNow()}
        </span>
        <span className={messageClass + "curuser-title--comment"}>{title}</span>

        <p className={messageClass + "body message__body--" + message.type}>
          {message.body}
        </p>
      </div>
    );
  }
};

export default Message;
