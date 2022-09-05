import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SigninPage from "../Pages/SigninPage";
import SignupPage from "../Pages/SignupPage";

function RouteManager() {
  return (
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
  );
}

export default RouteManager;
