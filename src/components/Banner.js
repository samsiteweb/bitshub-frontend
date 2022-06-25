import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36"
      style={{
        backgroundImage: "url(/assets/img-13.webp)",
      }}
    >
      <div className="container ">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
          best collection for <br />
          durable computers
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At <br /> velit saepe, error doloribus quisquam
          distinctio{" "}
        </p>
        <div className="mt-12 ">
          <Link
            to="/shop"
            href="none"
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
