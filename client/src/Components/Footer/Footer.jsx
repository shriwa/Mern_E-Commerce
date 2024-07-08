import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_2.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <div className="footer-logo">
          <img src={footer_logo} style={{ height: "50px" }} alt="" />
          {/* <p>SnapShop</p> */}
        </div>
      </Link>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Officers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <FaInstagram size={25} color="white" />
        </div>
        <div className="footer-icons-container">
          <FaFacebook size={25} color="white" />
        </div>
        <div className="footer-icons-container">
          <FaPinterest size={25} color="white" />
        </div>
        <div className="footer-icons-container">
          <FaWhatsapp size={25} color="white" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
