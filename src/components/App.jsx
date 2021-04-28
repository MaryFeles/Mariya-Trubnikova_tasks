import React, { Component } from "react";
import task from "../store/tasks";

class App extends Component {
  componentDidMount() {
    const { searchQuery } = task.state;
    task.getAllTasks(searchQuery);
  }

  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default App;
