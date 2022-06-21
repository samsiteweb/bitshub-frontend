import React from "react";
import Features from "../components/Features";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Ad from "../components/Ad";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <div className="container py-16">
        <Features />
      </div>

      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
        <Categories />
      </div>
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
        <Products />
      </div>
      <Ad />
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">recommended for you</h2>
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
