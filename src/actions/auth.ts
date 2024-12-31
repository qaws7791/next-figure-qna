"use server";

import { signIn, signOut } from "@/lib/auth";

export async function signInGoogleAction() {
  return signIn("google");
}

export async function signOutAction() {
  return signOut();
}
