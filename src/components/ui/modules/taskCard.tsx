import { IoTrashSharp } from "react-icons/io5";
import { Button } from "../button";
import { Checkbox } from "@/components/ui/checkbox";
import { ITask } from "@/types";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hook";
import {
  deleteTask,
  toggleCompleteSate,
} from "@/redux/features/task/taskSlice";
interface Iprops {
  task: ITask;
}
export default function TaskCard({ task }: Iprops) {
  const disPatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>
          <h1 className={cn({ "line-through": task.isComplete })}>
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => disPatch(deleteTask(task.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <IoTrashSharp />
          </Button>
          <Checkbox
            checked={task.isComplete}
            onClick={() => disPatch(toggleCompleteSate(task.id))}
          />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
}
