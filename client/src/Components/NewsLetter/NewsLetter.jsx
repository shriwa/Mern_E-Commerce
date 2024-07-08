import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>Get Exlusive Offers On Your Email</h1>
      <p>Subscribe to our Newsletter & stay updated</p>
      <div>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
