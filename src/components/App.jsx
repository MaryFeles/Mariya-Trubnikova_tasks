import React, { Component } from "react";
import Search from "./Search";
import Button from "./Button";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Search />
        </div>
        <div className="main">
          <div className="main__header">
            <h1 className="main__title">
              You&apos;ve got{" "}
              <span className="highlighted-text">
                <Counter /> task
              </span>{" "}
              today
            </h1>
            <Button />
          </div>
        </div>
        <div className="aside"></div>
      </div>
    );
  }
}

export default App;
