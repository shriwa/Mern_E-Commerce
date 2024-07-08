import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { IoCloseSharp } from "react-icons/io5";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
  } = useContext(ShopContext);

  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="cart-items-format cart-items-format-main">
                <img src={e.image} alt="" className="carticon-product-image" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-items-qty">{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <IoCloseSharp
                  style={{
                    background: "red",
                    borderRadius: "10px",
                    color: "white",
                  }}
                  className="cart-items-remove-icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="cart-items-promocode">
          <p>If you have promo code , Enter here</p>
          <div className="cart-items-promo-box">
            <input type="text" placeholder="promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
