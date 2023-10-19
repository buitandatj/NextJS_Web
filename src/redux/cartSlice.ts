import { IProducts } from "@/type/IProducts";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartItem extends IProducts {
  count: number;
}
interface ICartState {
  items: ICartItem[];
}
const initialState: ICartState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      state.items.push(action.payload);
    },
    deleteCart: (state, action: PayloadAction<ICartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
