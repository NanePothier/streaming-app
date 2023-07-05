import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  firstName: "",
  plan: "",
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateUserData(state, action) {
      const { username, firstName } = action.payload;
      state.username = username;
      state.firstName = firstName;
    },
    updatePlan(state, action) {
      state.plan = action.payload;
    },
    clearPlan(state) {
      state.plan = "";
    },
  },
});

export default userDataSlice;
