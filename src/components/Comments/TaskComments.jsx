import React, { useEffect } from "react";
import { Comment, Avatar, PageHeader } from "antd";
import CommentList from "./CommentList";
import Preloader from "../Preloader/Preloader";
import Editor from "./Editor";
import AuthModal from "../Auth/AuthModal";
import commentsStore from "../../store/comments";
import tasksStore from "../../store/tasks";
import usersStore from "../../store/users";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import Layout from "antd/lib/layout/layout";

const TaskComments = observer(() => {
  const history = useHistory();
  const path = useHistory().location.pathname;
  const { currentUser } = usersStore.state;
  const {
    comments,
    isFetching,
    value,
    refactoredComments,
  } = commentsStore.state;

  const { currentTask, currentTaskStatus } = tasksStore.state;

  useEffect(() => {
    tasksStore.setCurrentTaskStatus("Loading");
    let taskId = path.replace("/task/", "");
    tasksStore.getCurrentTask(taskId).then(() => {
      commentsStore
        .getAllCommentsOfCurrentTask(taskId)
        .then(() => {
          commentsStore.refactorAllComments();
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }, []);

  const handleOnBack = () => {
    history.push("/");
  };

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    commentsStore.setIsFetching(true);
    commentsStore.createNewComment(currentUser.id, currentTask);
    tasksStore.addUserRoleToTask(currentTask, currentUser.id, "commentator");
    commentsStore.getAllCommentsOfCurrentTask(currentTask.id);
  };

  const handleChange = (e) => {
    commentsStore.setValue(e.target.value);
  };

  return currentTask ? (
    <Layout className="comments-container">
      <PageHeader
        className="task-title"
        onBack={handleOnBack}
        title={currentTask.title}
      />
      {isFetching ? (
        <Preloader />
      ) : comments.length > 0 ? (
        <CommentList comments={refactoredComments} />
      ) : (
        <span>No one has posted comments for this task yet</span>
      )}
      <Comment
        className="comments__editor"
        avatar={
          currentUser ? (
            <Avatar
              className={"avatar"}
              src={`/avatars/${currentUser.avatar}`}
              alt={currentUser.name + currentUser.surname}
            />
          ) : (
            ""
          )
        }
        content={
          currentUser ? (
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={isFetching}
              value={value}
            />
          ) : (
            <>
              <span className="err">Sign in to post a comment!&emsp; </span>
              <AuthModal />
            </>
          )
        }
      />
    </Layout>
  ) : currentTaskStatus == "Loading" ? (
    <Preloader />
  ) : (
    <h1>404: NOT FOUND</h1>
  );
});

export default TaskComments;
