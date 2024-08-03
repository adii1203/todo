/* eslint-disable @typescript-eslint/no-misused-promises */

import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export const SignIn = ({
  provider,
  ButtonVariant,
}: {
  provider: string;
  ButtonVariant?:
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "default"
    | "destructive"
    | null
    | undefined;
}) => {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";

        // Skip sign-in screen if the user is already signed in
        if ((await auth()) !== null) {
          redirect("/today");
        }

        await signIn("github", { redirectTo: "/today" });
      }}>
      <Button variant={ButtonVariant} className="w-full" type="submit">
        {`Sign in with ${provider}`}
      </Button>
    </form>
  );
};
