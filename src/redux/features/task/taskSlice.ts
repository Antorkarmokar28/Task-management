import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "_zFdtIR6GF9FdfueIFVVz",
      isComplete: false,
      title: "What is programming",
      description:
        "Programming is the process of giving instructions to a computer to perform specific tasks. It involves writing code using programming languages like Python, Java, or C++. These instructions tell the computer how to process data, solve problems, and execute commands. Programming is used to create software, websites, mobile apps, games, and much more. Essentially, it’s a way for humans to communicate with computers and make them work efficiently.",
      priority: "low",
      dueDate: "2025-2-8",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isComplete: false, ...taskData };
};

const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteSate: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload ? (task.isComplete = !task.isComplete) : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updatedFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }
};

export const { addTask, toggleCompleteSate, deleteTask, updatedFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
