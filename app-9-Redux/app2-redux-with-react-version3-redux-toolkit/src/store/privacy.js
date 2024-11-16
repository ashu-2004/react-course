import { createSlice } from "@reduxjs/toolkit";

const slicePrivacy = createSlice({
  name: "privacy",
  initialState: { privacyVal: false },
  reducers: {
    privacyCheck: (state) => {
      state.privacyVal = !state.privacyVal;
    },
  },
});
export const actions = slicePrivacy.actions; //We can export a actions from here so what, we can use those actions or perform those actions in the perticular places using word 'actions' which will be accessed from its own slice.
export default slicePrivacy;