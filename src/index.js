import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

window.renderReactApp = (containerId) => {
  return new Promise((resolve, reject) => {
    ReactDOM.render(
      <React.StrictMode>
        <App containerId={containerId} resolve={resolve} />
      </React.StrictMode>,
      document.getElementById(containerId)
    );
  });
};

window.unmountReactApp = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
