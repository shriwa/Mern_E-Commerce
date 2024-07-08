import React from "react";
import "./RelatedProduct.css";
import product_data from "../Assets/data";
import Item from "../Items/Item";

const RelatedProduct = () => {
  return (
    <div className="related-products">
      <h1>Related products</h1>
      <hr />
      <div className="related-products-items">
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

export default RelatedProduct;

// 2.18.12
