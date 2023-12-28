import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice/CartSlice";

const AppStore = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default AppStore;
