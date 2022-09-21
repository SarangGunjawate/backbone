import { Dialog } from "@material-ui/core";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ForgotPassword from "../Auth/ForgotPassword";
import WithLoader from "../HOC/WithLoader";
import NavigationManager from "../Navigation/NavigationManager";
import SigninPage from "../Pages/SigninPage";
import SignupPage from "../Pages/SignupPage";
import SoftwareListPage from "../Pages/SoftwareListPage";
import SoftwaresubTypePage from "../Pages/SoftwaresubTypePage";
import SoftwareTypeListPage from "../Pages/SoftwareTypeListPage";
import SoftwareTypePage from "../Pages/SoftwareTypePage";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";

function RouteManager() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
      <Route path="/" element={<NavigationManager />}>
        <Route path="/softwarelist" element={<SoftwareListPage />} />
        <Route path="/softwaretypelist" element={<SoftwareTypeListPage />} />
        <Route path="/softwaresubtype" element={<SoftwaresubTypePage />} />
      </Route>
      </Route>

      <Route element={<AuthRoute />}>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
      </Route>

      {/* <Route path="/" element={<SigninPage />} /> */}
      
      <Route path="/softwaretype" element={<SoftwareTypePage />} />
      <Route path="/forgotpass" element={<ForgotPassword />} />
      <Route path="/withLoader" element={<WithLoader />} />
    </Routes>
  );
}

export default RouteManager;
