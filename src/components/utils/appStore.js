import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { Reducer } from "redux";
const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default appStore;
