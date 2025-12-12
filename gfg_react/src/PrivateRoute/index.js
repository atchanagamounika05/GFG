import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn, "status");
  return <div>{isLoggedIn ? children : <Navigate to="/login" />}</div>;
}

export default PrivateRoute;
