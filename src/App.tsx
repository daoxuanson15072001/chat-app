import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatPage from "./Pages/ChatPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/:id" Component={ChatPage} />
    </div>
  );
}

export default App;
