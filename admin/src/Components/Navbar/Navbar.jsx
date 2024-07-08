import React, { useContext } from "react";
import "./Navbar.css";
import navLogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";
import { AuthContext } from "../../Context/AuthContext";
import LogoutButton from "../../Buttons/LogoutButton";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div>
        <img src={navLogo} alt="" className="nav-logo" />
      </div>

      <div className=" flex justify-center items-center gap-3">
        <LogoutButton />
        {currentUser.name}
      </div>
    </div>
  );
};

export default Navbar;
