import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Items/Item";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Popular = () => {
  const [product_data, setProduct_data] = useState([]);

  const { all_product } = useContext(ShopContext);

  useEffect(() => {
    fetch("http://localhost:4000/products/popularinwomen")
      .then((res) => res.json())
      .then((data) => setProduct_data(data));
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {product_data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
