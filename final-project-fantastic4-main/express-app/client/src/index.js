import React from "react";
import ReactDOM from "react-dom";
import "./dist/main.css";
import App from "./App";
import LoginComponent from "./modules/login";

ReactDOM.render(
  <React.StrictMode>
    <LoginComponent />
  </React.StrictMode>,
  document.getElementById("root")
);