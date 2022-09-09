import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ForgotPassword from "../Auth/ForgotPassword";
import SoftwaretypForm from "../Auth/SoftwaretypForm";
import WithLoader from "../HOC/WithLoader";
import SigninPage from "../Pages/SigninPage";
import SignupPage from "../Pages/SignupPage";
import SoftwareListPage from "../Pages/SoftwareListPage";
import SoftwareTypePage from "../Pages/SoftwareTypePage";

function RouteManager() {
  return (
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/softwaretype" element={<SoftwareTypePage />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/softwarelist" element={<SoftwareListPage />} />
        <Route path="/withLoader" element={<WithLoader />} />
      </Routes>
  );
}

export default RouteManager;
