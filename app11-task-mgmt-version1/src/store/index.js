import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "task",
  initialState: {
    title: "",
    description: "",
    item: {
      date: "",
      time: "",
      currDate: "",
    },
  },
  reducers: {
    addTitle: (state, action) => {
      state.title = action.payload;
    },
    addDesc: (state, action) => {
      state.description = action.payload;
    },
    addDate: (state, action) => {
      state.item = {
        date: action.payload.dateChange,
        time: action.payload.currentTime,
        currDate: action.payload.currentDate,
      };
    },
    resetData: (state, action) => {
      (state.title = ""), (state.description = ""), (state.item.date = "");
    },
  },
});

const addSlice = createSlice({
  name: "add",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(...action.payload);
    },
    deleteTask: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      return newState;
    },
  },
});

const config = configureStore({
  reducer: {
    task: slice.reducer,
    add: addSlice.reducer,
  },
});

export const taskAction = slice.actions;
export const addAction = addSlice.actions;
export default config;
