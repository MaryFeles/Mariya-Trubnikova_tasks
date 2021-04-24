import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    {
      id: 1,
      title: "Evaluate the addition and deletion of user IDs.",
      priority: "Minor",
      completed: false,
      status: "Pending",
    },
    {
      id: 2,
      title: "Identify the implementation team.",
      priority: "Normal",
      completed: false,
      status: "In Progress",
    },
    {
      id: 3,
      title: "Batch schedule download/process.",
      priority: "Critical",
      completed: true,
      status: "Completed",
    },
    {
      id: 4,
      title: "Identify the implementation team.",
      priority: "Normal",
      completed: false,
      status: "Pending",
    },
    {
      id: 5,
      title: "Batch schedule download/process.",
      priority: "Critical",
      completed: false,
      status: "Pending",
    },
    {
      id: 6,
      title: "Batch schedule download/process.",
      priority: "Critical",
      completed: true,
      status: "Cancelled",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(todo) {
    todo.completed = !todo.completed;
    todo.completed ? this.setStatus(todo, "Completed") : this.setStatus(todo, "Pending");
  }

  setStatus(todo, status) {
    todo.status = status;
  }

  get numberOfIncompletedTodos() {
    let incompletedTodos = this.todos.filter((todo) => !todo.completed);
    return incompletedTodos.length;
  }

  get numberOfCompletedTodos() {
    let completedTodos = this.todos.filter((todo) => todo.completed);
    return completedTodos.length;
  }
}

export default new Todo();
