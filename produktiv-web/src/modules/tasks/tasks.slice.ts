import { createSlice } from "@reduxjs/toolkit";
import { Task } from "modules/tasks/models/task.model";

export interface TasksState {
  tasks: Task[]
}

const exampleTasks = [
  { name: 'Order brake pads', dueDate: new Date(), isCompleted: false },
  { name: 'Order dinner', dueDate: new Date(), isCompleted: true },
  { name: 'Schedule meetign with SWA team to organize team dinner and executive meetings', dueDate: new Date(), isCompleted: false  },
  { name: 'Sync with mark about the save tender cart flow', dueDate: new Date(), isCompleted: false  },
];

const tasksInitialState: TasksState = {
  tasks: exampleTasks
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    toggleTask: (state, action) => {

    }
  }
});

export const { 
  toggleTask,
} = tasksSlice.actions;
