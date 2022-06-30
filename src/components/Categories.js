import React from "react";
import CategoryCard from "./CategoryCard";
import { categoryData } from "../data/categoryData";

const Categories = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-2">
      {categoryData.category.map((item) => {
        return <CategoryCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Categories;
