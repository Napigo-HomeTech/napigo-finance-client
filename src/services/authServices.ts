import { Session } from "@supabase/supabase-js";
import { authClient } from "./supabaseServices";

/**
 *
 */
authClient.onAuthStateChange((event: string, session: Session | null) => {
  switch (event) {
    case "USER_DELETED":
      console.log("USER_DELETED");
      authClient.signOut();
      break;
    default:
      break;
  }
});
