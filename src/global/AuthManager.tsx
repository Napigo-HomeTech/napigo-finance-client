import React, { Fragment, ReactNode } from "react";
// import { SupabaseClient } from "services/supabase/init-client";

type AuthManagerProps = {
  children: ReactNode;
};
export const AuthManager: React.FC<AuthManagerProps> = (props) => {
  const { children } = props;

  // const session = SupabaseClient.auth.session();

  return <Fragment>{children}</Fragment>;
};
