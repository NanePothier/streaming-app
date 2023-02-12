import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  plan: "",
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updatePlan(state, action) {
      state.plan = action.payload;
    },
    clearPlan(state) {
      state.plan = "";
    },
  },
});

export default userDataSlice;
