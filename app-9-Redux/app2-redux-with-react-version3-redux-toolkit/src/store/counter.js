import { createSlice } from "@reduxjs/toolkit";

const sliceAction = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increament: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    addition: (state, action) => {
      state.counterVal = state.counterVal + Number(action.payload);
    },
    subtraction: (state, action) => {
      state.counterVal = state.counterVal - Number(action.payload);
    },
  },
});

export const action1 = sliceAction.actions; //We can export a actions from here so what, we can use those actions or perform those actions in the perticular places using word 'actions' which will be accessed from its own slice.
export default sliceAction;