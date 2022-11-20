import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppWrapper from "./context/StateContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <BrowserRouter>
      <AppWrapper>
        <App />
      </AppWrapper>
    </BrowserRouter>
  </>,
  rootElement
);
