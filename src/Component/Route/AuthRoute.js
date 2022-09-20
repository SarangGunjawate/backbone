import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getAccessToken } from '../../Utils/Helper';

const AuthRoute = () => {
  const token = getAccessToken();
  if (!token) {
    return <Outlet />;
  }
  return <Navigate to='/' replace={true} />;
};

export default AuthRoute;
