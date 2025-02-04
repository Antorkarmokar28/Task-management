import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  task: ITask[];
}

const initialState: IInitialState = {
  task: [
    {
      id: "ffgsdgafd",
      title: "Initialize frontend",
      description: "Create home page and routing",
      dueDate: "2025-11-2",
      isComplete: false,
      priority: "High",
    },
    {
      id: "ffgsdgafd",
      title: "Create github repo",
      description: "Create home page and routing",
      dueDate: "2025-11-2",
      isComplete: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
