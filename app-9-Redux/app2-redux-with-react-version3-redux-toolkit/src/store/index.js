import { configureStore } from "@reduxjs/toolkit";
import sliceAction from "./counter";
import slicePrivacy from "./privacy";

const configStore = configureStore({
  reducer: {
    counter: sliceAction.reducer, //The name here should be always reducer even though in the slice it is mentioned as 'reducers'.
    privacy: slicePrivacy.reducer,
  },
});

export default configStore;
