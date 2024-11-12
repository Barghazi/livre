import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App2 from "./App2";
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(<><App /><App2 /></>);
