import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //if item already exixt then increase the quantity
      const itemIndex = state.items.findIndex(
        (items) => items.card.info.id === action.payload.card?.info?.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].card.info.inStock += 1;
      } else {
        //if item dont exist then simply push it on items [],
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (items) => items.card.info.id !== action.payload //action. payload is result from function indide dispatch
      );
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      // or you can write => return {item : []}
    },
    increase: (state, action) => {
      const itemIndex = state.cart.items.findIndex(
        (items) => items.card.info.id === action.payload
      );
      state.items[itemIndex].card.info.instock += 1;
    },
  },
});
export const { increase, addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
