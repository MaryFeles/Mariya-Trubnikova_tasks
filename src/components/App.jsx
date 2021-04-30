import React, { Component } from "react";
import task from "../store/tasks";
import users from "../store/users";

class App extends Component {
  componentDidMount() {
    const { searchQuery } = task.state;
    task.getAllTasks(searchQuery);
    // console.log(users.getCurrentUser(localStorage.getItem("userId")))
    users.getUserFromLocalStorage(localStorage.getItem("userId"));
  }

  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default App;
