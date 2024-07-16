import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
