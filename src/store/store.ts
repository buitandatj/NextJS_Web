import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof cartReducer>;
export type RootStateUser = ReturnType<typeof userReducer>;
