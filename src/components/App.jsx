import React, { Component } from "react";
import Search from "./Search";
import Counter from "./Counter";
import Todo from "./Todo";
import CompletedTodo from "./CompletedTodo";
import Btn from "./TodoModal";

export const formatStr = (str) => {
  str = str.toLowerCase().replace(/\s/g, "");
  return str;
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <Search />
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
            <CompletedTodo />
          </div>
        </div>
        <div className="aside"></div>
      </div>
    );
  }
}

export default App;
