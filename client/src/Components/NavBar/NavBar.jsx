import React, { useContext, useRef, useState } from "react";
import "./NavBar.css";
import logo from "../Assets/logo_2.png";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { IoIosArrowDropdown } from "react-icons/io";
import { AuthContext } from "../../Context/Authcontext";

const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout();
      navigate("/login");
    }
  };

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <img src={logo} style={{ height: "60px" }} alt="" />
          {/* <p>SnapShop</p> */}
        </div>
      </Link>

      <IoIosArrowDropdown
        className="nav-dropdown"
        onClick={dropdown_toggle}
        style={{ fontSize: "35px", cursor: "pointer" }}
      />

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p>Shop</p>
          </Link>{" "}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none", color: "white" }}>
            <p>Men</p>
          </Link>{" "}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none", color: "white" }}>
            <p>women</p>
          </Link>{" "}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/Kids" style={{ textDecoration: "none", color: "white" }}>
            <p>Kids</p>
          </Link>{" "}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("auth_token") ? (
          <div className="username">
            <p>{currentUser.name}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">
            <button>
              <p>Login</p>
            </button>
          </Link>
        )}

        <Link to="/cart">
          <IoCartOutline
            className="nav-cart"
            style={{ fontSize: "45px", textDecoration: "none", color: "white" }}
          />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default NavBar;
