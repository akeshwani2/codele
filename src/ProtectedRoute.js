import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase';

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser;

  if (!user) {
    // If no user is authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the children (i.e., the protected content)
  return children;
};

export default ProtectedRoute;
