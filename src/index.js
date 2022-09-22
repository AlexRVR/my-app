// import React from "react"
// import {createRoot} from "react-dom/client"
// import "bootstrap/dist/css/bootstrap.css"

// const element = <h1>Hello World</h1>
// const container = document.getElementById("root")
// const root = createRoot(container)

// root.render(element)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
const App = () => {
  return <h1>Hello World</h1>;
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
