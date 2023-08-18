import React from 'react';
import { Route, Navigate ,Outlet } from 'react-router-dom';
const isAuthenticated = localStorage.getItem('jwtToken'); // Check if token exists
const ProtectedRoute = ({ Component}) => {


 return isAuthenticated ?  <Component /> : <Navigate to="/auth/login" />


};

export default ProtectedRoute;
