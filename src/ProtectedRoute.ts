import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useUserAuth();

  // console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
