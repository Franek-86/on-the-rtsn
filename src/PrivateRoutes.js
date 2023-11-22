import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "./userContext";
const PrivateRoutes = () => {
  const { user } = useUserContext();

  return user ? <Outlet /> : <Navigate to='/login' />;
};
export default PrivateRoutes;
