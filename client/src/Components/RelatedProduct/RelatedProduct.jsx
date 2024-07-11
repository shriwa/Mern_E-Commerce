import React, { useContext } from "react";
import "./RelatedProduct.css";
import Item from "../Items/Item";
import { ShopContext } from "../../Context/ShopContext";

const RelatedProduct = ({ category }) => {
  const { all_product } = useContext(ShopContext);

  const relatedProducts = all_product
    .filter((item) => item.category === category)
    .slice(0, 4);

  return (
    <div className="related-products">
      <h1>Related products</h1>
      <hr />
      <div className="related-products-items">
        {relatedProducts.map((item, i) => (
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
    </div>
  );
};

export default RelatedProduct;
