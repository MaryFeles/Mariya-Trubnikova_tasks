import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import "./scss/style.scss";
import App from "./components/App.jsx";
import registerServiceWorker from "react-service-worker";

ReactDOM.render(
  // <BrowserRouter>

  <App />,

  // </BrowserRouter>
  document.getElementById("root")
);
registerServiceWorker();
