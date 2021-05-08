import React, { Component } from "react";
import task from "../store/tasks";
import users from "../store/users";

class App extends Component {
  componentDidMount() {
    const { searchQuery } = task.state;
    users.getAllUsers();
    users.getUserFromLocalStorage(localStorage.getItem("userId"));
    task.getAllTasks(searchQuery);
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default App;
