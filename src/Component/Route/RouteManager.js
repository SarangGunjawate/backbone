import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SoftwaretypForm from "../Auth/SoftwaretypForm";
import SigninPage from "../Pages/SigninPage";
import SignupPage from "../Pages/SignupPage";
import SoftwareTypePage from "../Pages/SoftwareTypePage";

function RouteManager() {
  return (
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/softwaretype" element={<SoftwareTypePage />} />
      </Routes>
  );
}

export default RouteManager;
