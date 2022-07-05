import { createClient } from "@supabase/supabase-js";

const options = {
  schema: "public",
  headers: { "x-my-custom-header": "x-napigo-header" },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};

export const superbaseClient = createClient(
  process.env.REACT_APP_SUPABASE_URL ?? "",
  process.env.REACT_APP_SUPABASE_KEY ?? "",
  options
);

export const authClient = superbaseClient.auth;
