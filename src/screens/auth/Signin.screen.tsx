import { SigninForm } from "components/module/auth";
import { AUTH_FIXTURES } from "constants/auth.fixtures";
import React from "react";

export const SigninScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 w-[80%]">
      <p className="text-xl font-normal w-[80%]">{AUTH_FIXTURES.signin_form_title}</p>
      <SigninForm />
    </div>
  );
};
