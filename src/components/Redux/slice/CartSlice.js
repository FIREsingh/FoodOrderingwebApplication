import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.card?.info?.id !== action.payload
      );
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      // or you can write => return {item : []}
    },
  },
});
export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
