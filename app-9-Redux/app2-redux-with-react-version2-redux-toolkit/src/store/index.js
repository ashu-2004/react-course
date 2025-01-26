import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state) => {
      console.log(state, action);
    },
    sub: (state) => {
      console.log(state, action);
    },
    privacy: (state) => {
      console.log(state, action);
    },
  },
});

const configStore = configureStore({
  //config store is used to config all the reducers in it as like createStore
  // but it only differ in case that in createStore it contains a reducer with all the definitions.
  // which becomes very warst(). for that purpose configureStore() is used to store slices.
  reducer: {
    counter: slice.reducer,
  },
});

// import { createStore } from "redux";
// const INITIAL_VALUE = {
//   counter: 0,
//   privacy_val: false,
// };
// const counterReducer = (store = INITIAL_VALUE, action) => {
//   let newStore = store;
//   if (action.type == "INCREMENT") {
//     newStore = { ...store, counter: store.counter + 1 };
//   } else if (action.type == "DECREMENT") {
//     newStore = {
//       ...store,
//       counter: store.counter - 1,
//     };
//   } else if (action.type == "ADDITION") {
//     newStore = {
//       ...store,
//       counter: store.counter + Number(action.payload.addition),
//     };
//   } else if (action.type == "SUBTRACTION") {
//     newStore = {
//       ...store,
//       counter: store.counter - Number(action.payload.subtraction),
//     };
//   } else if (action.type == "PRIVACY") {
//     return {
//       ...store,
//       privacy_val: !store.privacy_val,
//     };
//   }
//   return newStore;
// };
// const counterStore = createStore(counterReducer);
export const counterActions = slice.actions;
export default configStore;
