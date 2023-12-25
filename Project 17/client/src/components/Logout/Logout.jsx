import React from "react";
import { Navigate } from "react-router-dom";
const logoutUser = () => {
  localStorage.removeItem("Login_Token");
};
const Logout = () => {
  React.useEffect(() => {
    logoutUser();
  }, [logoutUser]);

  return <Navigate to='/login' />;
};

export default Logout;
