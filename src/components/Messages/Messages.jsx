import React from "react";
import { useHistory } from "react-router-dom";
import Message from "./Message";
import tasksStore from "../../store/tasks";
import { observer } from "mobx-react";
import usersStore from "../../store/users";

const Messages = observer(() => {
  const history = useHistory();
  const { tasks, messages } = tasksStore.state;
  const { users, currentUser } = usersStore.state;

  const handleClick = (e, taskId) => {
    e.preventDefault();
    history.push(`/task/${taskId}`);
  };

  let messageClass = "message message--";

  return messages.map((message) => {
    let author = users.find((user) => user.id == message.userId);
    let task = tasks.find((task) => task.id == message.taskId);
    let isCurrentUser;
    let title;
    const linkToTask = (
      <span
        className="link"
        onClick={(e) => {
          handleClick(e, task.id);
        }}
      >
        task
      </span>
    );
    const linkToNewTask = (
      <span
        className="link highlighted-pink"
        onClick={(e) => {
          handleClick(e, task.id);
        }}
      >
        new task:&nbsp;
      </span>
    );

    if (message.type === "comment") {
      if (currentUser && message.userId == currentUser.id) {
        title = <>You have commented on the &nbsp;{linkToTask}</>;
        isCurrentUser = true;
      } else if (currentUser && message.userId != currentUser.id){
        isCurrentUser = false;
        title = <>Comment on your&nbsp;{linkToTask}</>;
      } else {
        isCurrentUser = false;
        title = <>Comment on &nbsp;{linkToTask}</>;
      }
    } else if (message.type === "creation") {      
      if (currentUser &&  message.userId == currentUser.id) {
        isCurrentUser = true;
        title = <>You have successfully created a task!</>;
      } else {
        isCurrentUser = false;        
        title = (
          <>
            Created&nbsp;{linkToNewTask}"{task.title}"
          </>
        );
      }
    }
    return (
      <Message
        className={messageClass + message.type}
        author={author}
        message={message}
        title={title}
        type={message.type}
        isCurrentUser={isCurrentUser}
        task={task.title}
      ></Message>
    );
  });
});

export default Messages;
