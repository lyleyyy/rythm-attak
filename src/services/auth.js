import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { SupabaseAdapter } from "@auth/supabase-adapter";

const authConfig = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  providers: [
    // Google({
    //   clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID,
    //   clientSecret: process.env.NEXT_PUBLIC_AUTH_GOOGLE_SECRET,
    // }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
};

export const {
  auth,
  // handlers,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
