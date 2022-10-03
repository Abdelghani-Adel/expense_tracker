import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
