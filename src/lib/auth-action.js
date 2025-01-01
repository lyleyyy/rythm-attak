"use server";
import { signIn } from "@/services/auth";

export async function SignIn(provider) {
  return await signIn(provider);
}
