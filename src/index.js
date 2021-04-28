import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./scss/style.scss";
import App from "./components/App.jsx";
import registerServiceWorker from "react-service-worker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import TaskComments from "./components/Comments/TaskComments";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/task" component={TaskComments} /> */}
        <Route exact path='/task/:id' component={TaskComments} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
