import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../auth/firebase-config";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
      createUserWithEmailAndPassword(
        auth,
        state?.user.email,
        state?.user.password
      );
      console.log(state.user);
    },
    login: (state, action) => {
      state.user = action.payload;
      signInWithEmailAndPassword(
        auth,
        state?.user.email,
        state?.user.password
      );
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {

      state.user = null;
      localStorage.clear();
    },
  },
  extraReducers:{}
});

export const { register, login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
