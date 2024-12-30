"use server";

import { signIn } from "@/lib/auth";

export async function signInGoogle() {
  return signIn("google");
}
