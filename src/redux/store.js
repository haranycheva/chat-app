import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./MessageSlice";

export const store = configureStore({reducer: RootReducer});