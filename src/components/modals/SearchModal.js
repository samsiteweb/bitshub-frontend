import React from "react";

const SearchModal = ({ modalHandler }) => {
  return (
    <div className="mx-8">
      <div className="text-gray-600 py-8 flex">
        <span className="uppercase text-xs">What are you looking for?</span>
        <span
          className="ml-auto font-normal"
          onClick={() => {
            modalHandler();
          }}
        >
          X
        </span>
      </div>
      <div className="w-full relative">
        <input
          type="text"
          name=""
          id=""
          className="w-full border-0 border-b border-gray-400 border-r-0 py-3 focus:outline-none focus:ring-transparent focus:border-primary"
          placeholder="search products..."
        />
        <span className="absolute right-4 top-3 text-lg text-gray-400">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchModal;
