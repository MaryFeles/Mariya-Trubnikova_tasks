import { makeAutoObservable } from "mobx";
import api from "../dal/api";

class Tasks {
  state = {
    tasks: [],
    messages: [],
    isFetching: false,
    searchQuery: "",
    currentTask: undefined,
    currentTaskStatus: "Loading",
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getAllTasks(searchQuery) {
    this.setIsFetching(true);
    await api.task
      .getAll(searchQuery)
      .then((data) => {
        let messages = [];
        data.forEach((task) => {
          task.messages.forEach((message) => {
            message.taskId = task.id;
            message.date = new Date(message.date);
            messages.push(message);
          });
        });
        this.setTasks(data);
        this.setMessages(messages);
        this.setIsFetching(false);
      })
      .catch((error) => console.log(error));
  }

  async addTask(task) {
    this.setIsFetching(true);
    await api.task.add(task).then((data) => {
      this.addTaskToArr(data);
      this.setIsFetching(false);
    });
  }

  async getCurrentTask(id) {
    await api.task
      .get(id)
      .then((data) => {
        this.setCurrentTask(data);
      })
      .then(() => {
        this.setCurrentTaskStatus("Done");
      })
      .catch((e) => {
        this.setCurrentTaskStatus("error");
        console.log(e);
      });
  }

  updateTask(task) {
    api.task.update(task);
  }

  createNewTask(task, priority, userId) {
    let newTask = {
      title: task,
      priority: priority,
      completed: false,
      status: "Pending",
      date: new Date(),
      comments: [],
      messages: [],
      users: [{ id: userId, roles: ["creator"] }],
      messages: [
        {
          id: 1,
          type: "creation",
          body: "Task created",
          date: Date(),
          userId: userId,
        },
      ],
      comments: [],
    };
    this.addTask(newTask);
  }

  addUserRoleToTask(task, userId, role) {
    let UserIndexInTask = task.users.findIndex((user) => user.id == userId);

    if (
      UserIndexInTask >= 0 &&
      !task.users[UserIndexInTask].roles.includes(role)
    ) {
      task.users[UserIndexInTask].roles.push(role);
    } else if (UserIndexInTask < 0) {
      task.users.push({
        id: userId,
        roles: [role],
      });
    }

    this.updateTask(task);
  }

  setTasks(data) {
    this.state.tasks = data;
  }

  setMessages(data) {
    data.sort(function (a, b) {
      return b.date - a.date;
    });

    this.state.messages = data;
    console.log(this.state.messages);
  }
  setCurrentTask(task) {
    this.state.currentTask = task;
  }

  setCurrentTaskStatus(status) {
    this.state.currentTaskStatus = status;
    console.log("set current status " + status);
  }

  addTaskToArr(newTask) {
    this.state.tasks.unshift(newTask);
  }

  removeTask(id) {
    api.task.remove(id);
    this.state.tasks = this.state.tasks.filter((task) => task.id !== id);
  }

  completeTaskToggle(task) {
    task.completed = !task.completed;
    task.completed
      ? this.setStatus(task, "Completed")
      : this.setStatus(task, "Pending");
  }

  setStatus(task, status) {
    task.status = status;
    api.task.update(task);
  }

  setIsFetching(value) {
    this.state.isFetching = value;
  }

  setSearchQuery(value) {
    this.state.searchQuery = value;
  }

  get numberOfIncompletedTasks() {
    let incompletedTasks = this.state.tasks.filter((task) => !task.completed);
    return incompletedTasks.length;
  }

  get numberOfCompletedTasks() {
    let completedTasks = this.state.tasks.filter((task) => task.completed);
    return completedTasks.length;
  }
}

export default new Tasks();
