"use client";

import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { useState } from "react";
import { signInAction } from "@/actions/auth-action";

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
  const [email, setEmail] = useState("");

  return (
    <form
      className="w-full"
      action={async () => {
        await signInAction(provider, email);
      }}>
      <Button variant={ButtonVariant} className="w-full" type="submit">
        {`Sign in with ${provider}`}
      </Button>

      {provider === "Magic link" && (
        <div>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-border border"
            placeholder="Email"
            type="email"
          />
        </div>
      )}
    </form>
  );
};
