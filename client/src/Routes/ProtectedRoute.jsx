import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  console.log("CurrentUser: ", currentUser);

  if (!currentUser) {
    console.log("No user found, redirecting to login");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
