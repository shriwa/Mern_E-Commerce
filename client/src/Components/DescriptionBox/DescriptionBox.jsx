import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Reviews (94)</div>
      </div>
      <div className="description-box-description">
        <p>
          "SnapShop - Your Ultimate Shopping Companion! Experience seamless
          online shopping with our user-friendly app. Snap, search, and shop
          effortlessly as you explore a curated collection of trending products.
          Enjoy exclusive deals, personalized recommendations, and a secure
          checkout process. Elevate your shopping experience with SnapShop's
          intuitive design and stay ahead in style with the latest fashion,
          tech, and lifestyle offerings. Download now and transform your
          browsing into buying with just a snap!"
        </p>
        <p>
          "SnapShop - Your Ultimate Shopping Companion! Experience seamless
          online shopping with our user-friendly app. Snap, search, and shop
          effortlessly as you explore a curated collection of trending products.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
