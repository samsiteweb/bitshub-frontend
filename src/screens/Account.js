import React from "react";
import { Route } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ChangePassword from "../components/ChangePassword";
import ManageAccount from "../components/ManageAccount";
import ManageAddress from "../components/ManageAddress";
import ProfileInfo from "../components/ProfileInfo";
import ProfileSideNav from "../components/ProfileSideNav";
import WishList from "../components/WishList";

const Account = () => {
  return (
    <div>
      <Breadcrumbs page="Account" />
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <ProfileSideNav />

        <Route path="/account/profile-info" component={ProfileInfo}></Route>
        <Route path="/account/manage-address" component={ManageAddress}></Route>
        <Route path="/account/change-password" component={ChangePassword}></Route>
        <Route path="/account/manage-account" component={ManageAccount}></Route>
        <Route path="/account/wishlist" component={WishList}></Route>
      </div>
    </div>
  );
};

export default Account;
