import { makeAutoObservable } from "mobx";
import api from "../dal/api";

class Todo {
  state = {
    todos: [],
    isFetching: false,
    searchQuery: '',
  };

  constructor() {
    makeAutoObservable(this);
  }
  
  async getAllTodos(searchQuery) {
    this.setIsFetching(true);
    await api.todo.getAll(searchQuery).then((data) => {
      this.setTodos(data);
      this.setIsFetching(false);
    });
    
  }

  async addTodo(todo) {
    this.setIsFetching(true);
    await api.todo.add(todo).then((data) => {
      this.addTodoToArr(data);
      this.setIsFetching(false);
    });
  }

  createNewTodo(task, priority) {
    let newTodo = {
      title: task,
      priority: priority,
      completed: false,
      status: "Pending",
      date: new Date(),
    };

    this.addTodo(newTodo);
  }

  setTodos(newTodos) {
    this.state.todos = newTodos;
  }

  addTodoToArr(newTodo) {
    this.state.todos.unshift(newTodo);
  }

  removeTodo(id) {
    api.todo.remove(id);
    this.state.todos = this.state.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(todo) {
    todo.completed = !todo.completed;
    todo.completed
      ? this.setStatus(todo, "Completed")
      : this.setStatus(todo, "Pending");
  }

  setStatus(todo, status) {
    todo.status = status;
    api.todo.update(todo);
  }

  setIsFetching(value) {
    this.state.isFetching = value;
  }

  setSearchQuery(value) {
    this.state.searchQuery = value;
  }

  get numberOfIncompletedTodos() {
    let incompletedTodos = this.state.todos.filter((todo) => !todo.completed);
    return incompletedTodos.length;
  }

  get numberOfCompletedTodos() {
    let completedTodos = this.state.todos.filter((todo) => todo.completed);
    return completedTodos.length;
  }
}

export default new Todo();
