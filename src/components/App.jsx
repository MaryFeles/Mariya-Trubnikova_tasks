import React, { Component } from "react";
import Search from "./Search";
import Counter from "./Counter";
import Todo from "./Todo";
import Btn from "./AddingTaskModal";
import todo from "../store/todo";
import AuthModal from "./AuthModal";

export const formatStr = (str) => {
  str = str.toLowerCase().replace(/\s/g, "");
  return str;
};

class App extends Component {
  componentDidMount() {
    const { searchQuery } = todo.state;
    todo.getAllTodos(searchQuery);
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <Search />
          <AuthModal />
        </div>
        <div className="main">
          <div className="main__header">
            <h1 className="main__title">
              You&apos;ve got{" "}
              <span className="highlighted-pink">
                <Counter /> task
              </span>{" "}
              today
            </h1>
            <Btn />
          </div>

          <div className="main__body">
            <Todo />
          </div>
        </div>
        <div className="aside"></div>
      </div>
    );
  }
}

export default App;
