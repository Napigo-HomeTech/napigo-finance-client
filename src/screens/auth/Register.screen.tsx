import { RegisterForm } from "components/module/auth/RegisterForm";
import { AUTH_FIXTURES } from "constants/auth.fixtures";
import React from "react";

export const RegisterScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 w-[80%]">
      <p className="text-xl font-normal w-[80%]">{AUTH_FIXTURES.register_form_title}</p>
      <RegisterForm />
    </div>
  );
};
