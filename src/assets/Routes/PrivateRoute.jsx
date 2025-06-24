import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-dots loading-xl"></span>;
  }
  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
