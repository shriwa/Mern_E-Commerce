import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Power } from "lucide-react";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout();
      navigate("/login");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white  focus:ring-1 focus:outline-none focus:ring-red-300 font-medium text-sm text-center rounded-full hover:bg-gray-100 p-0.5"
    >
      <Power color="#d55353" />
    </button>
  );
};

export default LogoutButton;
