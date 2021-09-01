import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import GlobalStyles from "utils/styles/GlobalStyles";
import App from "./App";
import store from "store";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);
