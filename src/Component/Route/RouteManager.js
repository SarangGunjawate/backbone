import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "../Auth/About";
import SigninPage from "../Pages/SigninPage";
import SignupPage from "../Pages/SignupPage";

function RouteManager() {
  return (
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default RouteManager;
