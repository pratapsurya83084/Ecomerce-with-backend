import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

//create a redux store  and go to main.jsx ,provider rapps
export const store = configureStore({
  reducer: {
    cart: CartSlice, //add cartslice
  },
  devTools: true,
});
