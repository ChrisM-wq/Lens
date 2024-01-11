// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    fetchUser: (state) => {
      state.isAuthenticated = true;
      state.user = fetchedUser;
    },
  },
});
export const { authenticated } = (state) => state.auth.isAuthenticated;
export const { login, logout, fetchUser } = authSlice.actions;
export default authSlice.reducer;