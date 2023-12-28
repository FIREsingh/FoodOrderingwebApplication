import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./components/Redux/AppStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={AppStore}>
    <RouterProvider router={AppRouter} />
  </Provider>
);
