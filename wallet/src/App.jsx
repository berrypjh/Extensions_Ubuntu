import React from "react";
import "./App.css";
import { Router } from "react-chrome-extension-router";
import CreatePassword from "./pages/CreatePassword";

const App = () => {
  return (
    <Router>
      <CreatePassword />
    </Router>
  );
};

export default App;
