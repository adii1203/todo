"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";
import Label from "./label";

const Labels = () => {
  const labels = useQuery(api.labels.getLabels);

  if (labels === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-6 space-y-3">
      {labels?.map((label) => {
        return (
          <>
            <Label label={label} />
          </>
        );
      })}
    </div>
  );
};

export default Labels;
