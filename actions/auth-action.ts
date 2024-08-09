"use server";

import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
export async function signInAction(provider: string, email: string) {
  if ((await auth()) !== null) {
    redirect("/today");
  }

  if (provider === "Magic link") {
    await signIn("resend", { email: email, redirectTo: "/today" });
  } else {
    await signIn("github", { redirectTo: "/today" });
  }
}
