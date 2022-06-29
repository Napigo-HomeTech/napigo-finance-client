import { NapigoBaseLogoShape } from "components/element/logo/NapigoBaseLogoShape";
import { AUTH_FIXTURES } from "constants/auth.fixtures";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const PendingConfirmEmailScreen: React.FC = () => {
  const { state } = useLocation();

  const enterFromRegistration = Boolean(
    typeof state === "object" && state !== null && "fromRegistration" in state
  );

  if (enterFromRegistration) {
    return (
      <div
        className={`container 
      mx-auto 
      h-screen 
      flex
      flex-col 
      gap-10
      max-w-[900px]
      items-center
      justify-center
      `}
      >
        <div className="card bg-base-200 w-[500px] h-[auto] border-[0.5px] border-base-content/20 px-4 py-10 rounded items-center gap-4">
          <NapigoBaseLogoShape />
          <span className="text-xl font-bold">{AUTH_FIXTURES.confirm_pending_email.title}</span>
          <span className="text-sm text-center">{AUTH_FIXTURES.confirm_pending_email.sub}</span>
        </div>

        <footer id="confirm-email-footer" className="flex flex-col items-center justify-center">
          <span className="font-black">
            {AUTH_FIXTURES.confirm_pending_email.footer.company_website}
          </span>
          <span className="text-sm text-base-content">
            {AUTH_FIXTURES.confirm_pending_email.footer.copyright_text}
          </span>
        </footer>
      </div>
    );
  }
  return <Navigate to="/auth" />;
};
