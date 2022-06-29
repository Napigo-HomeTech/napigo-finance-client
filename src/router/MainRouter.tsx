import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SigninScreen, RegisterScreen, PendingConfirmEmailScreen } from "../screens/auth";
import { GeneralScreen, NotFound404Screen } from "screens/misc";
import { AuthLayout } from "layouts";
import { AuthRouter } from "./AuthRouter";
import { SecureRouter } from "./SecureRouter";

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

        <Route path="/" element={<SecureRouter />}>
          <Route path="user" element={<GeneralScreen />} />
        </Route>

        <Route path="*" element={<NotFound404Screen />} />
      </Routes>
    </BrowserRouter>
  );
};
