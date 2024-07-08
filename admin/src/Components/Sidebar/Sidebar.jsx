import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import cart from "../../assets/Product_Cart.svg";
import list from "../../assets/Product_list_icon.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={cart} alt="" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list} alt="" />
          <p>List Product</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
