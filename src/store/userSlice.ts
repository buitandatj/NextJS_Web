// Trong một file slice, ví dụ userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    email: "",
    password: "",
    userName: "",
    type: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.userName = action.payload.userName;
      state.type = action.payload.type;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = "";
      state.password = "";
      state.userName = "";
      state.type = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
