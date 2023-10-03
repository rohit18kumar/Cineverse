import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
//The purpose of this code is to make the Redux store accessible to all components within your React application,
//allowing those components to connect to the store, access its state, and dispatch actions to update the state.
//This integration simplifies the process of managing the application's state and makes it easier to share data between components.
