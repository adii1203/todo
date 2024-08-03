/* eslint-disable @typescript-eslint/no-misused-promises */

import { StickyHeader } from "@/components/layout/sticky-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <StickyHeader className="px-4 py-2">
        <div className="flex justify-between items-center">
          ToDo
          <Button variant={"default"}>
            <Link href={"/login"}>Sign in</Link>
          </Button>
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
