import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isCookiePresent = document.cookie.includes("token");

  if (!isCookiePresent) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
