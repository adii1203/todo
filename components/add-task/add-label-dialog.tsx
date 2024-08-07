"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";

const AddLabels = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"ghost"} size={"icon"} className="w-8 h-8">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 max-w-md top-60">
          <DialogHeader className="flex px-2 pt-4">
            <DialogTitle>Add Labels</DialogTitle>
          </DialogHeader>
          <Separator />
          <div className="flex flex-col space-y-4 px-3">
            <div className="flex flex-col space-y-1">
              <label htmlFor="label" className="text-sm font-semibold">
                Name
              </label>
              <Input
                type="text"
                id="label"
                className="border border-border focus-visible:border-primary/50"
              />
            </div>
            {/* <div className="flex flex-col space-y-2">
              <label htmlFor="color" className="text-sm">
                Color
              </label>
              <input type="color" id="color" className="input" />
            </div> */}
          </div>
          <Separator className="mt-3" />
          <DialogFooter className="pb-3 px-3">
            <div className="flex justify-end">
              <Button size={"sm"} variant={"default"}>
                Save
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddLabels;
