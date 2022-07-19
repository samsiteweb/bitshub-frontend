import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = (props) => {
  const { name, line1, line2, title } = props;
  return (
    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800 text-lg">{title}</h3>
        {title === "Personal Profile" ? (
          <Link to="/account/profile-info" className="text-primary">
            Edit
          </Link>
        ) : (
          <Link to="/account/manage-address" className="text-primary">
            Edit
          </Link>
        )}
      </div>
      <div className="space-y-1">
        <h4 className="text-gray-700 font-medium">{name}</h4>
        <p className="text-gray-800">{line1}</p>
        <p className="text-gray-800">{line2}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
