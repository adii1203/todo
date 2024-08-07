import AddLabels from "@/components/add-task/add-label-dialog";

const Label = () => {
  return (
    <div className="pt-10">
      <div>
        <h1 className="text-3xl font-semibold">Labels</h1>
      </div>
      <div className="flex items-center justify-between border-b border-border py-2">
        <p>Labels</p>
        <AddLabels />
      </div>
    </div>
  );
};

export default Label;
