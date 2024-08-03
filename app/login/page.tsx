import React from "react";
import { SignIn } from "@/app/page";

const Login = () => {
  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="w-96 p-4 space-y-4 rounded-md border-border border">
        <SignIn provider={"Github"} />
        <SignIn provider="Google" ButtonVariant={"outline"} />
        <SignIn provider="Magic link" ButtonVariant={"outline"} />
      </div>
    </div>
  );
};

export default Login;
