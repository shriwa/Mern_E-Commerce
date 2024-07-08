import React from "react";
import "./Breadcrumbs.css";
import { RiArrowDropRightLine } from "react-icons/ri";

const Breadcrumbs = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      HOME <RiArrowDropRightLine size={50} color="black" /> SHOP{" "}
      <RiArrowDropRightLine size={50} color="black" /> {product.category}{" "}
      <RiArrowDropRightLine size={50} color="black" /> {product.name}
    </div>
  );
};

export default Breadcrumbs;
