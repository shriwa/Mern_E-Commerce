import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
