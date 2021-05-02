import React, { Component } from "react";
import tasks from "../store/tasks";
import task from "../store/tasks";
import users from "../store/users";

class App extends Component {
  componentDidMount() {
    const { searchQuery } = task.state;
    task.getAllTasks(searchQuery);
    users.getAllUsers();
    users.getUserFromLocalStorage(localStorage.getItem("userId"));
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default App;
