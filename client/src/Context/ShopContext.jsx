import React, { createContext, useEffect, useState } from "react";
import API from "../API/index";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [popular_product, setPopular_product] = useState([]);
  const [newCollection, setNewCollection] = useState([]);
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const [allProductsError, setAllProductsError] = useState(null);
  const [userCartError, setUserCartError] = useState(null);
  const [popularProductsError, setPopularProductsError] = useState(null);
  const [newCollectionsError, setNewCollectionsError] = useState(null);
  const [addToCartError, setAddToCartError] = useState(null);
  const [removeFromCartError, setRemoveFromCartError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await API.get("/products/allproducts");
        setAll_product(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setAllProductsError("Failed to fetch all products.");
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
        setUserCartError("Failed to fetch user cart.");
      }
    };

    fetchAllProducts();
    fetchUserCart();
  }, []);

  const fetchPopularInWomen = async () => {
    try {
      const response = await API.get("/products/popularinwomen");
      setPopular_product(response.data);
    } catch (error) {
      console.error("Error fetching popular products:", error);
      setPopularProductsError("Failed to fetch popular products.");
    }
  };

  const fetchNewCollection = async () => {
    try {
      const response = await API.get("/products/newcollections");
      setNewCollection(response.data);
    } catch (error) {
      console.error("Error fetching new collections:", error);
      setNewCollectionsError("Failed to fetch new collections.");
    }
  };

  const addToCart = async (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth_token")) {
      try {
        const response = await API.post(
          "/users/addtocart",
          { itemId },
          {
            headers: {
              Accept: "application/json",
              auth_token: `${localStorage.getItem("auth_token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error adding to cart:", error);
        setAddToCartError("Failed to add item to cart.");
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth_token")) {
      try {
        const response = await API.post(
          "/users/removefromcart",
          { itemId },
          {
            headers: {
              Accept: "application/json",
              auth_token: `${localStorage.getItem("auth_token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error removing from cart:", error);
        setRemoveFromCartError("Failed to remove item from cart.");
      }
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
    popular_product,
    newCollection,
    cartItem,
    fetchPopularInWomen,
    fetchNewCollection,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    allProductsError,
    userCartError,
    popularProductsError,
    newCollectionsError,
    addToCartError,
    removeFromCartError,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
