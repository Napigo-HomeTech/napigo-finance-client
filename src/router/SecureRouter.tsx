import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SupabaseClient } from "services/supabase/init-client";
import { Session } from "@supabase/supabase-js";

export const SecureRouter: React.FC = () => {
  const session: Session | null = SupabaseClient.auth.session();

  if (session === null) {
    return <Navigate to="/auth" replace={true} />;
  }
  return <Outlet />;
};
