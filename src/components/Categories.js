import React from "react";
import CategoryCard from "./CategoryCard";
import { categoryData } from "../data/categoryData";

const Categories = () => {
  return (
    <div className="container py-16">
      <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
      <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1">
        {categoryData.category.map((item) => {
          <CategoryCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
