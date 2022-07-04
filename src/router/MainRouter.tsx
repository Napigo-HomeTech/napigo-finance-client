import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { SigninScreen, RegisterScreen, PendingConfirmEmailScreen } from "../screens/auth";
import { NotFound404Screen } from "screens/misc";
import { AuthLayout, UserLayout } from "layouts";
import { AuthRouter } from "./AuthRouter";
// import { SecureRouter } from "./SecureRouter";

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
        <Route path="/user" element={<AuthRouter redirectPath="/auth" />}>
          <Route index element={<UserLayout />} />
        </Route>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="*" element={<NotFound404Screen />} />
      </Routes>
    </BrowserRouter>
  );
};
