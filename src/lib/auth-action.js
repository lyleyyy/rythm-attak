"use server";
import { signIn } from "@/services/auth";
import { CredentialsSignin } from "next-auth";

export async function SignIn(provider) {
  return await signIn(provider);
}

export async function CredentialsSignIn(provider, formData) {
  try {
    return await signIn(provider, formData);
  } catch (e) {
    if (e instanceof CredentialsSignin)
      throw new Error("Email or password is incorrect.");
  }
}
