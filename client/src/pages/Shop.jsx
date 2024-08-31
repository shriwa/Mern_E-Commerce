import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";
import Stats from "../Components/Stats";

const Shop = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Stats />
      <NewsLetter />
    </div>
  );
};

export default Shop;
