import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  const { page } = props;
  return (
    <div className="container py-4 flex items-center gap-3">
      <Link rel="stylesheet" href="" className="text-primary text-base">
        <i className="fas fa-home"></i>
      </Link>

      <span className="text sm text-gray-400">
        <i className="fas fa-cheveron-right"></i>
      </span>
      <p className="text-gray-600 font-medium">{page}</p>
    </div>
  );
};

export default Breadcrumbs;
