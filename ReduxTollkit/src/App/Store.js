// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
