// router.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "../Routes/ProtectedRoute";
import Shop from "../pages/Shop";
import ShopCategory from "../pages/ShopCategory";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import LoginSignUp from "../pages/LoginSignUp";
import men_banner from "../Components/Assets/banner_mens_2";
import women_banner from "../Components/Assets/banner_women_2";
import kids_banner from "../Components/Assets/banner_kids_2";
import Payment from "../pages/Payment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/mens",
        element: <ShopCategory banner={men_banner} category="men" />,
      },
      {
        path: "/womens",
        element: <ShopCategory banner={women_banner} category="women" />,
      },
      {
        path: "/kids",
        element: <ShopCategory banner={kids_banner} category="kid" />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/login",
        element: <LoginSignUp />,
      },
      {
        path: "*",
        element: <h1>No Page Found</h1>,
      },
    ],
  },
]);

export default Router;
