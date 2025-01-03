"use server";
import { signIn } from "@/services/auth";

export async function SignIn(provider) {
  return await signIn(provider);
}

export async function CredentialsSignIn(provider, formData) {
  return await signIn(provider, formData);
}
