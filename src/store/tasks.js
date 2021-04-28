import { makeAutoObservable } from "mobx";
import api from "../dal/api";

class Tasks {
  state = {
    tasks: [],
    isFetching: false,
    searchQuery: '',
  };

  constructor() {
    makeAutoObservable(this);
  }
  
  async getAllTasks(searchQuery) {
    this.setIsFetching(true);
    await api.task.getAll(searchQuery).then((data) => {
      this.setTasks(data);
      this.setIsFetching(false);
    }).catch((error) => console.log(error));
    
  }

  async addTask(task) {
    this.setIsFetching(true);
    await api.task.add(task).then((data) => {
      this.addTaskToArr(data);
      this.setIsFetching(false);
    });
  }

  createNewTask(task, priority) {
    let newTask = {
      title: task,
      priority: priority,
      completed: false,
      status: "Pending",
      date: new Date(),
    };

    this.addTask(newTask);
  }

  setTasks(data) {
    this.state.tasks = data;
  }

  addTaskToArr(newTask) {
    this.state.tasks.unshift(newTask);
  }

  removeTask(id) {
    api.task.remove(id);
    this.state.tasks = this.state.tasks.filter((task) => task.id !== id);
  }

  completeTask(task) {
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
