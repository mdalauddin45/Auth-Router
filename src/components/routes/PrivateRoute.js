import React from "react";
import { Children } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  if (user && user.uid) {
    return Children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
