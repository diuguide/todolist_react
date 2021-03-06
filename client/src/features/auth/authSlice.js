import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    username: "",
    isAuthenticated: false,
  },
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },
    isLoaded: (state) => {
      state.isLoading = false;
    },
    loggedIn: (state, action) => {
      state.isLoading = false;
      state.username = action.payload;
      state.isAuthenticated = true;
    },
    loggedOut: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.username = "";
    },
  },
});

export const { isLoading, isLoaded, loggedIn, loggedOut } = authSlice.actions;

export const authState = (state) => state.auth;

export default authSlice.reducer;
