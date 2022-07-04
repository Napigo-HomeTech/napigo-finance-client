import { FinanceLogo35 as Logo } from "components/element/logo";
import { AUTH_FIXTURES } from "constants/auth.fixtures";
import React from "react";

export const AuthGreeting: React.FC = () => {
  return (
    <div
      className={`
      flex 
      flex-col 
      gap-2
      items-start
      justify-start
  `}
    >
      <div className="mb-4">
        <Logo />
      </div>
      <p className="w-[90%] text-lg dark:text-white text-base-content">
        {AUTH_FIXTURES.auth_greeting}
      </p>
    </div>
  );
};
