import React from "react";
import "./Hero.css";
import { FaHandSpock } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import hero_image from "../Components/Assets/hero_image_2.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            {/* <FaHandSpock size={50} color="" /> */}
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <FaLongArrowAltRight size={30} />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
