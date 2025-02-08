import { IoTrashSharp } from "react-icons/io5";
import { Button } from "../button";
import { Checkbox } from "@/components/ui/checkbox";
import { ITask } from "@/types";
import { cn } from "@/lib/utils";
interface Iprops {
  task: ITask;
}
export default function TaskCard({ task }: Iprops) {
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <IoTrashSharp />
          </Button>
          <Checkbox />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
}
