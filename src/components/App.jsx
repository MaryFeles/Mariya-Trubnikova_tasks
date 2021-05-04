import React, { Component } from "react";
import tasks from "../store/tasks";
import task from "../store/tasks";
import users from "../store/users";

class App extends Component {
  componentDidMount() {
    const { searchQuery } = task.state;
    users.getAllUsers();
    task.getAllTasks(searchQuery);    
    users.getUserFromLocalStorage(localStorage.getItem("userId"));
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default App;
