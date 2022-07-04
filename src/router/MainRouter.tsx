import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { SigninScreen, RegisterScreen, PendingConfirmEmailScreen } from "../screens/auth";
import { NotFound404Screen } from "screens/misc";
import { AuthLayout, UserLayout } from "layouts";
import { AuthRouter } from "./AuthRouter";
// import { SecureRouter } from "./SecureRouter";

/** Module Screens  */
import Budget from "../screens/budget";
import Report from "../screens/report";
import Planner from "../screens/planner";
import Setting from "../screens/settings";
import MoneyCard from "../screens/moneycard";

export const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthRouter redirectPath="/user" />}>
          <Route element={<AuthLayout />}>
            <Route index element={<SigninScreen />} />
            <Route path="register" element={<RegisterScreen />} />
          </Route>
          <Route path="confirm-email-pending" element={<PendingConfirmEmailScreen />} />
        </Route>
        <Route path="user" element={<AuthRouter redirectPath="/auth" />}>
          <Route element={<UserLayout />}>
            <Route index element={<Navigate to="budget" />} />
            <Route path="budget" element={<Budget />} />
            <Route path="moneycard" element={<MoneyCard />} />
            <Route path="planner" element={<Planner />} />
            <Route path="report" element={<Report />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="*" element={<NotFound404Screen />} />
      </Routes>
    </BrowserRouter>
  );
};
