"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import ModalReducer from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: ModalReducer,
  },
});
