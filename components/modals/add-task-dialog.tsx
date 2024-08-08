/* eslint-disable @typescript-eslint/no-misused-promises */

"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogOverlay,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { CalendarClock, Flag, Plus, Tag } from "lucide-react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import SetLabel from "./addtask/set-label";
import { Doc } from "@/convex/_generated/dataModel";

const AddTask = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [selectedLabel, setSelectedLabel] = useState<Doc<"labels">>();
  const [description, setDescription] = useState("");

  const addTodo = useMutation(api.todos.addTodo);

  const handelAddTodo = async () => {
    if (title === "") {
      return;
    }
    await addTodo({
      title,
      description,
      dueDate: 2,
      priority: 1,
      isCompleted: false,
      labelId: selectedLabel?._id,
    });
    setTitle("");
    setDescription("");
    setSelectedLabel(undefined);
    setOpen(false);
  };

  return (
    <div>
      <Dialog modal={false} open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="h-7 flex  items-center gap-2">
            <Plus size={16} />
            <span>New Task</span>
          </Button>
        </DialogTrigger>
        {/* <DialogPortal> */}
        <DialogOverlay className="" />
        <DialogContent className="p-0 pt-6 top-52 shadow-2xl">
          <div className="space-y-4">
            <div>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
                className="w-full h-6 outline-none border-none focus-visible:right-0 focus-visible:ring-transparent"
              />
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Description"
                className="w-full text-xs h-6 outline-none border-none focus-visible:right-0 focus-visible:ring-transparent"
              />
            </div>
            <div className="flex gap-2 px-3 ">
              <Button variant={"outline"} className="h-7 space-x-1 text-xs">
                <CalendarClock size={15} />
                <span>Due Date</span>
              </Button>
              <Button variant={"outline"} className="h-7 space-x-1 text-xs">
                <Flag size={15} />
                <span>Priority</span>
              </Button>
              <SetLabel
                selectedLabel={selectedLabel!}
                setSelectedLabel={setSelectedLabel}
              />
            </div>
          </div>
          <Separator className="" />
          <DialogFooter className="mr-4 pb-3">
            <Button onClick={handelAddTodo} className="">
              {"Add Task"}
            </Button>
          </DialogFooter>
        </DialogContent>
        {/* </DialogPortal> */}
        {/* </DialogOverlay> */}
      </Dialog>
    </div>
  );
};

export default AddTask;
