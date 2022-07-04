import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ProfileSideNav from "../components/ProfileSideNav";

const AccountLayout = ({ children }) => {
  return (
    <div>
      <Breadcrumbs page="Account" />
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <ProfileSideNav />

        {children}
      </div>
    </div>
  );
};

export default AccountLayout;
