import React, { useEffect, useContext } from "react";
import "./Popular.css";
import Item from "../Items/Item";
import { ShopContext } from "../../Context/ShopContext";

const Popular = () => {
  const { popular_product, fetchPopularInWomen, popularProductsError } =
    useContext(ShopContext);

  useEffect(() => {
    fetchPopularInWomen();
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      {popularProductsError ? (
        <div className="error-message">Error: {popularProductsError}</div>
      ) : (
        <div className="popular-item">
          {popular_product.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Popular;
