import React from "react";
import ReactDOM from "react-dom";

import MyApp from "./MyApp.js";
import MyHeader from "./MyHeader.js";

import "./styles.css";

ReactDOM.render(
  <div>
    <MyHeader />
    <MyApp />
  </div>,
  document.getElementById("root")
);
