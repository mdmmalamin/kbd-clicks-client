import { createSlice } from "@reduxjs/toolkit";

export type TProduct = {
  id?: string;
  img: string;
  title: string;
  description: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  status: string;
};

const initialState = {
  title: null,
  description: null,
  brand: null,
  quantity: null,
  price: null,
  rating: null,
  status: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      console.log(state, action.payload);
      state = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
