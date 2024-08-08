import Labels from "@/components/labels/label-list";
import LabelModal from "@/components/labels/labelModal";

const Label = () => {
  return (
    <div className="pt-10">
      <div>
        <h1 className="text-3xl font-semibold">Labels</h1>
      </div>
      <div className="flex items-center justify-between border-b border-border py-2">
        <p>Labels</p>
        <LabelModal />
      </div>
      <div>
        <Labels />
      </div>
    </div>
  );
};

export default Label;
