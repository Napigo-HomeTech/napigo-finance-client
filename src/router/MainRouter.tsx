import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SigninScreen } from "../screens/auth";
import { GeneralScreen, NotFound404Screen } from "screens/misc";
import { AuthLayout } from "layouts";

export const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="" element={<SigninScreen />} />
        </Route>
        <Route index element={<GeneralScreen />} />
        <Route path="*" element={<NotFound404Screen />} />
      </Routes>
    </BrowserRouter>
  );
};
