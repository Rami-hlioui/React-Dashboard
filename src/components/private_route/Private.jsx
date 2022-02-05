import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("access_token");
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return <Route component={Component} {...rest} />;
};

export default PrivateRoute;
