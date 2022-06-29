import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authClient } from "services/supabase.services";
import { Session } from "@supabase/supabase-js";

export const SecureRouter: React.FC = () => {
  const session: Session | null = authClient.session();
  const user = authClient.user();

  console.log(user);

  if (session === null) {
    return <Navigate to="/auth" replace={true} />;
  }
  return <Outlet />;
};
