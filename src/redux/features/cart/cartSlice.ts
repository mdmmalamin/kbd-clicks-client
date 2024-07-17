import { createSlice } from "@reduxjs/toolkit";

export type TCart = {
  _id?: string;
  quantity: number;
};

const initialState = {
  quantity: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      console.log(state, action.payload);
      state = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
