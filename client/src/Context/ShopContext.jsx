import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import API from "../API/index";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [popular_product, setPopular_product] = useState([]);
  const [cartItem, setCartItem] = useState(getDefaultCart());

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await API.get("/products/allproducts");
        setAll_product(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchUserCart = async () => {
      try {
        if (localStorage.getItem("auth_token")) {
          const response = await API.post(
            "/users/getcart",
            {},
            {
              headers: {
                Accept: "application/json",
                auth_token: `${localStorage.getItem("auth_token")}`,
                "Content-Type": "application/json",
              },
            }
          );
          setCartItem(response.data);
        }
      } catch (error) {
        console.error("Error fetching user cart:", error);
      }
    };

    fetchAllProducts();
    fetchUserCart();
  }, []);

  // const fetchPopularProducts = async () => {
  //   try {
  //     const response = await API.get("/products/allproducts");
  //     setPopular_product(response.data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth_token")) {
      API.post(
        "/users/addtocart",
        { itemId: itemId },
        {
          headers: {
            Accept: "application/json",
            auth_token: `${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => console.log(response.data))
        .catch((error) => console.error("Error adding to cart:", error));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth_token")) {
      API.post(
        "/users/removefromcart",
        { itemId: itemId },
        {
          headers: {
            Accept: "application/json",
            auth_token: `${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => console.log(response.data))
        .catch((error) => console.error("Error removing from cart:", error));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
