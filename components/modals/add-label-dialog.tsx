"use client";

import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ConvexError } from "convex/values";
import { Doc } from "@/convex/_generated/dataModel";
import { toast } from "sonner";

const AddLabels = ({
  open,
  setOpen,
  Icon,
  duplicateData,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  Icon: LucideIcon;
  duplicateData?: Doc<"labels">;
}) => {
  const addLabel = useMutation(api.labels.addLabel);
  const editLabel = useMutation(api.labels.editLabel);
  const [label, setLabel] = useState<{ name: string }>(
    duplicateData || { name: "" }
  );

  const [saving, setSaving] = useState(false);

  const handelAddLabel = async () => {
    try {
      setSaving(true);
      const labelId = await addLabel({
        name: label.name,
      });
      if (labelId) {
        setLabel({ name: "" });
        setOpen(false);
        toast.success("Label added");
        setSaving(false);
      }
    } catch (error) {
      if (error instanceof ConvexError) {
        console.log(error.data);
      }
      toast.error("Something went wrong");
      setSaving(false);
    }
  };

  const handelEditLabel = async () => {
    try {
      if (duplicateData) {
        setSaving(true);
        const isSuccess = await editLabel({
          id: duplicateData?._id,
          name: label.name,
        });
        if (isSuccess) {
          setOpen(false);
          setSaving(false);
          toast.success("Label updated");
        }
      }
    } catch (error) {
      if (error instanceof ConvexError) {
        toast.error(error.data);
      }
      toast.error("Something went wrong");
      setSaving(false);
    }
  };

  const saveDisabled = useMemo(() => {
    if (
      !open ||
      saving ||
      label.name === "" ||
      (duplicateData &&
        Object.entries(duplicateData).every(([key, value]) => {
          return label[key as keyof typeof label] === value;
        }))
    ) {
      return true;
    } else {
      return false;
    }
  }, [label, saving, duplicateData, open]);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <AddLabelButton setOpen={setOpen} Icon={Icon} />
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
                value={label.name}
                onChange={(e) => setLabel({ ...label, name: e.target.value })}
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
              <Button
                disabled={saveDisabled}
                onClick={duplicateData ? handelEditLabel : handelAddLabel}
                size={"sm"}
                variant={"default"}>
                Save
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const AddLabelButton = ({
  Icon,
  setOpen,
}: {
  Icon: LucideIcon;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Button
      onClick={() => setOpen(true)}
      variant={"ghost"}
      size={"icon"}
      className="w-8 h-8">
      {<Icon size={18} />}
    </Button>
  );
};

export const useAddLabelModal = ({
  Icon,
  duplicateData,
}: {
  Icon: LucideIcon;
  duplicateData?: Doc<"labels">;
}) => {
  const [open, setOpen] = useState(false);

  const AddLabelCallBack = useCallback(() => {
    return (
      <AddLabels
        duplicateData={duplicateData}
        Icon={Icon}
        open={open}
        setOpen={setOpen}
      />
    );
  }, [open, Icon, duplicateData]);

  return useMemo(
    () => ({
      AddLabelCallBack,
      open,
      setOpen,
    }),
    [AddLabelCallBack, open, setOpen]
  );
};

export default AddLabels;
