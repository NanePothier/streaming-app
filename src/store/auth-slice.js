import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  currentUser: '',
};

// updating state like this is fine when using redux toolkit
// because redux toolkit ensures behind the scenes that the old state is
// not actually changed like this
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = '';
    },
  },
});

export default authSlice;
