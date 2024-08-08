"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Tag } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

const SetLabel = ({
  selectedLabel,
  setSelectedLabel,
}: {
  selectedLabel: Doc<"labels">;
  setSelectedLabel: Dispatch<SetStateAction<Doc<"labels"> | undefined>>;
}) => {
  const labels = useQuery(api.labels.getLabels);

  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <Button variant={"outline"} className="h-7 space-x-1 text-xs">
            <Tag size={15} />
            <span>{selectedLabel ? selectedLabel.name : "Labels"}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Labels</DropdownMenuLabel>
          <DropdownMenuSeparator className="" />
          <DropdownMenuGroup>
            {labels?.map((label) => {
              return (
                <DropdownMenuItem
                  onClick={() => setSelectedLabel(label)}
                  key={label._id}
                  className="flex items-center gap-2">
                  <Tag size={15} />
                  <span>{label.name}</span>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SetLabel;
