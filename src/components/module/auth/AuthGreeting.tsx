import { NapigoLogo } from "components/element";
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
        <NapigoLogo scale={10} />
      </div>
      <p className="w-[90%] text-lg dark:text-white text-base-content">
        {AUTH_FIXTURES.auth_greeting}
      </p>
    </div>
  );
};
