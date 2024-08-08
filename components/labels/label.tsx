import { Doc } from "@/convex/_generated/dataModel";
import { Edit2, Tag, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAddLabelModal } from "../modals/add-label-dialog";

const Label = ({ label }: { label: Doc<"labels"> }) => {
  const deleteLabel = useMutation(api.labels.deleteLabel);
  const { AddLabelCallBack } = useAddLabelModal({ Icon: Edit2 });
  return (
    <>
      <div className="flex group items-center justify-between font-medium border-b border-border h-8">
        <Link
          key={label._id}
          href={"/labels/" + label._id}
          className="flex items-center gap-3 text-sm w-full">
          <Tag size={18} />
          {label.name}
        </Link>
        <div className="hidden group-hover:flex items-center gap-1">
          <AddLabelCallBack />
          <Button
            onClick={async () => {
              const isSuccess = await deleteLabel({
                id: label._id,
              });
              if (isSuccess) {
                toast.success("Label deleted");
              }
            }}
            variant={"ghost"}
            size={"icon"}
            className="w-7 h-7">
            <Trash2 size={18} className="text-destructive" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Label;
