import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import PostContextProvider from "./context/PostContextProvider";
import App from "./App/App";
import store from "./redux/flagReducer";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PostContextProvider>
        <App />
      </PostContextProvider>
    </Provider>
  </BrowserRouter>
);
