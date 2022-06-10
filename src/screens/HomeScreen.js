import React from "react";
import Features from "../components/Features";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Products from "../components/Products";

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Categories />
      <Products />
    </div>
  );
};

export default HomeScreen;
