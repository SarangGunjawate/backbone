import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getUserDetails } from '../../Redux/Reducers/UserReducer';
import { getAccessToken } from '../../Utils/Helper';
const ProtectedRoute = () => {
  // const user = useSelector(getUserDetails);
  const token = getAccessToken();
  if (token) {
    return <Outlet />;
  }
  return <Navigate to='/signin' replace={true} />;
};

export default ProtectedRoute;
