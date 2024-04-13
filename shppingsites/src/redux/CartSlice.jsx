import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState =JSON.parse(localStorage.getItem("cart")) ?? [];

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    //reducer is a function eg.make add to cart ,delete to cart function
    addToCart(state, action) { //addto cart function
      state.push(action.payload);//state is initial state,action is two type =payload and type,payload =any type, type=string
 },

//deleteto cart function
deleteFromCart(state,action){ 
    return state.filter(item=> item.id != action.payload.id) //id of item is not match
}

},
});

export const {addToCart,deleteFromCart}=cartSlice.actions;
export default cartSlice.reducer;