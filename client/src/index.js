import React from "react";
import ReactDOM from "react-dom";

import Typography from "typography";

import fairyGatesTheme from "typography-theme-fairy-gates";

import App from "./App";

const typography = new Typography(fairyGatesTheme);

typography.injectStyles();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
