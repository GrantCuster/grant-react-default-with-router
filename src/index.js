import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppState from "./AppState";
import registerServiceWorker from "./registerServiceWorker";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  rootEl
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <AppState>
        <NextApp />
      </AppState>,
      rootEl
    );
  });
}

registerServiceWorker();
