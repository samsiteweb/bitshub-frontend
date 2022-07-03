import React from "react";
import Features from "../components/Features";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Ad from "../components/Ad";

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <div className="container py-16">
        <Features />
      </div>

      <div className="container pb-16">
        <p className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</p>
        <Categories />
      </div>
      <div className="container pb-16">
        <p className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</p>
        <Products />
      </div>
      <Ad />
      <div className="container pb-16">
        <p className="text-2xl font-medium text-gray-800 uppercase mb-6">recommended for you</p>
        <Products />
      </div>
    </div>
  );
};

export default HomeScreen;
