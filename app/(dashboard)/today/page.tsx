import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Filter, Plus } from "lucide-react";
import AddTask from "@/components/add-task/add-task-dialog";
// import Todo from "@/components/todos/todo";
const Today = () => {
  return (
    <div className="mt-10">
      <div>
        <p className="text-xl font-semibold">Today</p>
      </div>
      <Separator className="my-4" />
      <div>
        <div className="flex gap-4">
          <AddTask />
          <Button
            disabled
            variant={"outline"}
            className="h-7 flex  items-center gap-2">
            <Filter size={16} />
            <span>Filter</span>
          </Button>
        </div>
        <div>{/* <Todo /> */}</div>
      </div>
    </div>
  );
};

export default Today;
