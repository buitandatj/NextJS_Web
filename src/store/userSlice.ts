"use client";
import { IUser } from "@/type/IUser";
import { createSlice } from "@reduxjs/toolkit";

let userInMemory: IUser | null = null;
const saveUserToLocalStorage = (user: IUser) => {
  userInMemory = user;
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};
const loadUserFromLocalStorage = () => {
  if (userInMemory) {
    return userInMemory;
  } else if (typeof window !== "undefined" && window.localStorage) {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  } else {
    return null;
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: loadUserFromLocalStorage() || {
    isLoggedIn: false,
    id: null,
    email: "",
    password: "",
    userName: "",
    type: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.userName = action.payload.userName;
      state.type = action.payload.type;
      saveUserToLocalStorage(state);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.id = null;
      state.email = "";
      state.password = "";
      state.userName = "";
      state.type = "";

      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
