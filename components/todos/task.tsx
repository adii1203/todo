// single todo

import { Doc, Id } from "@/convex/_generated/dataModel";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

const Task = ({
  data,
  handelCheck,
}: {
  data: Doc<"todos">;
  handelCheck: (isCompleted: boolean, todoId: Id<"todos">) => void;
}) => {
  return (
    <div className="mt-4 border-border border-2 rounded px-3 py-2">
      <div className="flex items-center gap-3">
        <Checkbox
          onCheckedChange={() => handelCheck(data.isCompleted, data._id)}
          checked={data.isCompleted}
          className={cn(
            "rounded-full border-muted-foreground",
            data.isCompleted && "border-primary"
          )}
        />
        <p>{data.title}</p>
      </div>
    </div>
  );
};

export default Task;
