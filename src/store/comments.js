import { makeAutoObservable } from "mobx";
import api from "../dal/api";
import users from "./users";
import moment from "moment";

class Comments {
  state = {
    comments: [],
    isFetching: false,
    value: "",
    refactoredComments: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getAllCommentsOfCurrentTask(id) {
    this.setIsFetching(true);
    await api.task
      .get(id)
      .then((data) => {
        this.setComments(data.comments);
        this.setIsFetching(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  addCommentIntoTask(task) {
    api.task.update(task);
    this.setValue("");
  }

  createNewComment(userId, task) {
    let idComment = 1;
    if (this.state.comments.length > 0) {
      let maxId = 1;

      this.state.comments.forEach((item) => {
        maxId = item.id > maxId ? item.id : maxId;
      });

      for (let i = 1; i <= maxId + 1; i++) {
        if (!this.state.comments.find((item) => item.id == i)) {
          idComment = i;
        }
      }
    }

    const newComment = {
      id: idComment,
      body: this.state.value,
      date: new Date(),
      userId: userId,
    };
    task.comments.push(newComment);
    this.addCommentIntoTask(task);
    this.refactorOneComment(newComment);
  }

  refactorOneComment(comment) {
    const commentAuthor = users.state.users.find(
      (item) => item.id == comment.userId
    );

    const newComment = {
      author: commentAuthor.name,
      avatar: `/avatars/${commentAuthor.avatar}`,
      content: comment.body,
      datetime: moment(comment.date).fromNow(),
    };
    this.state.refactoredComments.push(newComment);
  }

  setComments(comments) {
    this.state.comments = comments;
  }

  setValue(value) {
    this.state.value = value;
  }

  setIsFetching(value) {
    this.state.isFetching = value;
  }

  refactorAllComments() {
    let refactoredComments = [];
    this.state.comments.forEach((comment) => {
      const commentAuthor = users.state.users.find(
        (item) => item.id == comment.userId
      );

      const newComment = {
        author: commentAuthor.name,
        avatar: `/avatars/${commentAuthor.avatar}`,
        content: comment.body,
        datetime: moment(comment.date).fromNow(),
      };
      refactoredComments.push(newComment);
    });

    this.state.refactoredComments = refactoredComments;
  }
}

export default new Comments();
