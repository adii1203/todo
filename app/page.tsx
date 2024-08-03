/* eslint-disable @typescript-eslint/no-misused-promises */

import { auth, signIn } from "@/auth";
import { StickyHeader } from "@/components/layout/sticky-header";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <>
      <StickyHeader className="px-4 py-2">
        <div className="flex justify-between items-center">
          ToDo
          <SignIn />
        </div>
      </StickyHeader>
      <main className="container max-w-2xl flex flex-col gap-8">
        <h1 className="text-4xl font-extrabold my-8 text-center">
          Wellcome to ToDo.
        </h1>
      </main>
    </>
  );
}

const SignIn = () => {
  return (
    <form
      action={async () => {
        "use server";

        // Skip sign-in screen if the user is already signed in
        if ((await auth()) !== null) {
          redirect("/today");
        }

        await signIn(undefined, { redirectTo: "/today" });
      }}>
      <Button type="submit">Sign in</Button>
    </form>
  );
};
