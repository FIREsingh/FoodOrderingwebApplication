import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./slice/CartSlice";

const AppStore = configureStore({
  reducer: {
    cart: CartSliceReducer,
  },
});

export default AppStore;
