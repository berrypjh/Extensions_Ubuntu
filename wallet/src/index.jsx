import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = document.createElement("div");
document.body.appendChild(root);
render(<App />, root);

reportWebVitals();
