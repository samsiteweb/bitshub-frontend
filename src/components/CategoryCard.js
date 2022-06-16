import React from "react";

const CategoryCard = (props) => {
  const { item } = props;
  return (
    <div className="relative rounded-sm overflow-hidden group">
      <img src={item.image} alt="" className="w-full" />
      <a
        href="none"
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
      >
        {item.categoryName}
      </a>
    </div>
  );
};

export default CategoryCard;
