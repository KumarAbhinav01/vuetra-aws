import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAllowed, to }) => {
  return isAllowed ? <Outlet /> : <Navigate to={to} />;
};

export default PrivateRoute;
