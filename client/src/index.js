import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./Context/ShopContext";
import { AuthContextProvider } from "./Context/Authcontext";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ShopContextProvider>
        <RouterProvider router={Router} />
      </ShopContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
