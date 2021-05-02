import React, { useEffect } from "react";
import { Comment, Avatar } from "antd";
import CommentList from "./CommentList";
import Preloader from "../Preloader/Preloader";
import Editor from "./Editor";
import comments from "../../store/comments";
import { observer } from "mobx-react";
import users from "../../store/users";
import { useHistory } from "react-router-dom";
import tasks from "../../store/tasks";

const TaskComments = observer(() => {
  const path = useHistory().location.pathname;
  const value = comments.state.value;
  const isFetching = comments.state.isFetching;
  const currentTaskComments = comments.state.comments;
  const currentTask = tasks.state.currentTask;
  const currentTaskStatus = tasks.state.currentTaskStatus;
  const currentUser = users.state.currentUser;
  const refactoredComments = comments.state.refactoredComments;

  useEffect(() => {
    tasks.setCurrentTaskStatus("Loading");
    let taskId = path.replace("/task/", "");
    tasks.getCurrentTask(taskId).then(() => {
      comments
        .getAllCommentsOfCurrentTask(taskId)
        .then(() => {
          comments.refactorAllComments();
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }, []);

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    comments.setIsFetching(true);
    comments.createNewComment(currentUser.id, currentTask);
    tasks.setParticipantUser(currentUser.id, "commentator", currentTask);
    comments.getAllCommentsOfCurrentTask(currentTask.id);
  };

  const handleChange = (e) => {
    comments.setValue(e.target.value);
  };

  return currentTask ? (
    <>
      {isFetching ? (
        <Preloader />
      ) : currentTaskComments.length > 0 ? (
        <CommentList comments={refactoredComments} />
      ) : (
        <span>No one has posted comments for this task yet</span>
      )}
      <Comment
        avatar={
          <Avatar
            src={`/avatars/${currentUser.avatar}`}
            alt={currentUser.name}
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={isFetching}
            value={value}
          />
        }
      />
    </>
  ) : currentTaskStatus == "Loading" ? (
    <Preloader />
  ) : (
    <h1>404: NOT FOUND</h1>
  );
});

export default TaskComments;
