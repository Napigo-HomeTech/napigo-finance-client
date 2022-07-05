import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authClient } from "services/supabaseServices";
import { Session } from "@supabase/supabase-js";

export const SecureRouter: React.FC = () => {
  const session: Session | null = authClient.session();

  if (session === null) {
    return <Navigate to="/auth" replace={true} />;
  }
  return <Outlet />;
};
