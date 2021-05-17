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

  async getAllTasks(searchQuery = "") {
    this.setIsFetching(true);
    await api.task
      .getAll(searchQuery)
      .then((data) => {        
        this.setTasks(data);
        this.setMessages(data);
        this.setIsFetching(false);
      })
      .catch((error) => console.log(error));
  }

  setMessages(tasks=this.state.tasks) {
    this.setIsFetching(true);
    let messages = [];
    tasks.forEach((task) => {
      task.messages.forEach((message) => {
        message.taskId = task.id;
        message.date = new Date(message.date);
        this.sortMessages(messages);
        messages.push(message);
      });
    });
    this.setIsFetching(false);
  }

  async addTask(task) {
    this.setIsFetching(true);
    await api.task.add(task).then((data) => {
      this.addTaskToArr(data);
      this.setMessages(this.state.tasks);
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
    let userIndexInTask = task.users.findIndex((user) => user.id == userId);

    if (
      userIndexInTask >= 0 &&
      !task.users[userIndexInTask].roles.includes(role)
    ) {
      task.users[userIndexInTask].roles.push(role);
    } else if (userIndexInTask < 0) {
      task.users.push({
        id: userId,
        roles: [role],
      });
    }

    this.updateTask(task);
  }

  createNewMessage(userId, task, type, body) {
    let idMessage = 1;

    if (this.state.messages.length > 0) {
      let maxId = 1;

      this.state.messages.forEach((item) => {
        maxId = item.id > maxId ? item.id : maxId;
      });

      for (let i = 1; i <= maxId + 1; i++) {
        if (!this.state.messages.find((item) => item.id == i)) {
          idMessage = i;
        }
      }
    }

    const newMessage = {
      id: idMessage,
      type: type,
      body: body,
      date: new Date(),
      userId: userId,
    };

    task.messages.push(newMessage);
    this.addMessageIntoTask(task);
  }

  addMessageIntoTask(task) {
    api.task.update(task);
  }

  setTasks(data) {
    this.state.tasks = data;
  }

  sortMessages(data) {
    data.sort(function (a, b) {
      return b.date - a.date;
    });

    this.state.messages = data;
  }

  setCurrentTask(task) {
    this.state.currentTask = task;
  }

  setCurrentTaskStatus(status) {
    this.state.currentTaskStatus = status;
  }

  addTaskToArr(newTask) {
    this.state.tasks.unshift(newTask);
  }

  removeMessages(taskId) {
    this.state.messages.forEach(()=>{
      let messageIndex = this.state.messages.indexOf(
        (message) => message.taskId == taskId
      );
      while (messageIndex != -1 ) {
        this.state.messages.splice(messageIndex, 1);
      }
    })   
  }

  removeTask(id) {
    this.setIsFetching(true);
    api.task.remove(id);
    this.state.tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setMessages();
    this.setIsFetching(false);
  }

  completeTaskToggle(task) {
    task.completed = !task.completed;
    task.completed
      ? this.setStatus(task, "Completed")
      : this.setStatus(task, "Pending");
  }

  setStatus(task, status) {
    task.status = status;
    this.updateTask(task);
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
