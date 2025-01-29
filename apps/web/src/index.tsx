import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import stores from "./core/stores";
import "normalize.css";
import RoutesHOC from "./routes/routesHOC";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider {...stores}>
    <React.StrictMode>
      <RoutesHOC />
    </React.StrictMode>
  </Provider>
);
