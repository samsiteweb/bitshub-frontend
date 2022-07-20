import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const ContactScreen = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(/assets/img-13.webp)",
        }}
      >
        <div className="flex flex-col items-center bg-black bg-opacity-50 py-28">
          <p className="text-white text-3xl font-semibold">Contact Us</p>
          <div>
            <Breadcrumbs page="Contact" secondary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
