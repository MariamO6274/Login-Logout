// These routes should only be accessible for logged in users

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes({ component: Component }) {
  // Here we/ll put a conditional rendering
  // If user is authenticated, we will allow him to use dashboard
  // // we will show Outlet when user is isAuthnticated
  // redirect to the Login page

  // Step: 1: Check if user is authenticated (if user is logged in)
  // whatever the value isAuthenticated come here
  const isAuthenticatedUser = sessionStorage.getItem("isAuthenticated");

  if (isAuthenticatedUser) { // conditional rendering
    return <Outlet />;
  }
  //If it’s not authenticated then it will navigate to login page 
  return <Navigate to="/" />;
}


export default ProtectedRoutes;


// When you nest component into another componenet it becomes child-parant relationship
// ProtectedRoutes is a parant of Dashboard component, but it doesn't render anything bc we don't have a path
// Dashboard is a chikd, so in Protected Routes we should have outlet for chikd

// Outlet component --> creats space for child (like we did in NavBar app)