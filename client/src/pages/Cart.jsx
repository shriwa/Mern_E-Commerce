import React from "react";
import "./CSS/Cart.css";
import CartItems from "../Components/CartItems/CartItems";

const Cart = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <CartItems />
    </div>
  );
};

export default Cart;
