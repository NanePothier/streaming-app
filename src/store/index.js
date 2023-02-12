import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import userDataSlice from "./userData-slice";

// regular reducer function not needed anymore when using toolkit and slices
/*
const storeReducer = (state = initialAuthState, action) => {
  if (action.type === 'AUTH') {
    return {
      isAuthenticated: action.value.isAuth,
      currentUser: action.value.user,
    };
  }
  return state;
};
*/

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    userData: userDataSlice.reducer,
  },
});

export const authActions = authSlice.actions;
export const userDataActions = userDataSlice.actions;
export default store;
