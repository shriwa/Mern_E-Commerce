import React, { useContext, useEffect } from "react";
import "./NewCollections.css";
import Item from "../Items/Item";
import { ShopContext } from "../../Context/ShopContext";

const NewCollections = () => {
  const { newCollection, fetchNewCollection, newCollectionsError } =
    useContext(ShopContext);

  useEffect(() => {
    fetchNewCollection();
  }, []);

  return (
    <div className="newCollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      {newCollectionsError ? (
        <div className="error-message">Error: {newCollectionsError}</div>
      ) : (
        <div className="collections">
          {newCollection.map((item, i) => (
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

export default NewCollections;
