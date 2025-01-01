import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

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
};

export const {
  auth,
  // handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
