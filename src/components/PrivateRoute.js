import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state?.userSignin);
  return userInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
