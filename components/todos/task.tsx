// single todo

import { Doc } from "@/convex/_generated/dataModel";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

const Task = ({ data }: { data: Doc<"todos"> }) => {
  return (
    <div className="mt-4 border-border border-2 rounded px-3 py-2">
      <div className="flex items-center gap-3">
        <Checkbox
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
