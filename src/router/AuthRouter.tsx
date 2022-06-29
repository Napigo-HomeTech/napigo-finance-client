import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authClient } from "services/supabase.services";
import { Session } from "@supabase/supabase-js";

type AuthRouterProps = {
  redirectPath: string;
  replace?: boolean;
};
/**
 * This Component should redirect user to the appropriate User Screen
 * @param param0
 * @returns
 */
export const AuthRouter: React.FC<AuthRouterProps> = (props) => {
  const { redirectPath, replace } = props;

  const session: Session | null = authClient.session();

  if (session === null) {
    return <Outlet />;
  }
  return <Navigate to={redirectPath} replace={replace} />;
};
