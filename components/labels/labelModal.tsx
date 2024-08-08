"use client";

import React from "react";
import { useAddLabelModal } from "../modals/add-label-dialog";
import { Plus } from "lucide-react";

const LabelModal = () => {
  const { AddLabelCallBack } = useAddLabelModal({ Icon: Plus });
  return (
    <div>
      <AddLabelCallBack />
    </div>
  );
};

export default LabelModal;
