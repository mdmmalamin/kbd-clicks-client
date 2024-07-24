import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCart = {
  _id: string;
  total: number;
};

type TInitialState = {
  orders: TCart[];
};

const initialState: TInitialState = {
  orders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartPrice: (state, action: PayloadAction<TCart>) => {
      const isExist = state.orders.find(
        (order) => order._id === action.payload._id
      );

      // console.log(state.orders);
      // isExist!.total = action.payload.total;

      !isExist && state.orders.push({ ...action.payload });
      // console.log(state.orders);
    },
    removeCartPrice: (state, action: PayloadAction<TCart>) => {
      state.orders.push({ ...action.payload });
    },
  },
});

export const { setCartPrice, removeCartPrice } = cartSlice.actions;

export default cartSlice.reducer;
