import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import { getUser } from "./apiUsers";
import { encode, decode } from "next-auth/jwt";

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
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        try {
          const user = await getUser(credentials.email, credentials.password);

          if (!user) {
            throw new Error("Email or Password is incorrect.");
          }

          console.log("success!!!");
          return user;
        } catch (err) {
          return null;
          // err.cause.err.code === "credentials";
          // console.error(err.message);
          // throw err;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  jwt: { encode, decode },

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