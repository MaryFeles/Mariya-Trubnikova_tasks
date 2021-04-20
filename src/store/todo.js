import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    { id: 1, title: "Evaluate the addition and deletion of user IDs.", priority: "Minor", completed: false, status: "Pending" },
    { id: 2, title: "Identify the implementation team.", priority: "Normal", completed: false, status: "In Progress" },
    { id: 3, title: "Batch schedule download/process.", priority: "Critical", completed: true, status: "Pending" },
    { id: 4, title: "Identify the implementation team.", priority: "Normal", completed: false, status: "Pending" },
    { id: 5, title: "Batch schedule download/process.", priority: "Critical", completed: false, status: "Pending" },
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
  }

  get numberOfPendingTodos() {
    let pendingTodos = this.todos.filter(todo => todo.completed === false);
    return pendingTodos.length;    
  }
}

export default new Todo();
