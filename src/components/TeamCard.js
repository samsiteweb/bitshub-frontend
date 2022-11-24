import React from "react";

const TeamCard = (props) => {
  const { name, email, title } = props.item;
  return (
    <div className="bg-white rounded shadow overflow-hidden group">
      <div className="">
        <img src="" alt="avatar" className="w-[100%] h-[100%]" />
      </div>
      <div className="pt-4 pb-3 px-2">
        <p className="font-medium mb-2">{name}</p>
        <p className="text-xs text-gray-800">{title}</p>
        <div>
          <a href="/" className="text-xs text-gray-500">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
