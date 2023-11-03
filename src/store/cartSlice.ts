"use client";
import { addCart, deleteFromCart } from "@/constants/Message";
import { ICartItem, ICartState } from "@/type/ICart";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
let cartInMemory: ICartItem | null | any = null;
const saveCartToLocalStorage = (cartItems: ICartItem[]) => {
  cartInMemory = cartItems;
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("cart", JSON.stringify({ items: cartItems }));
  }
};

const loadCartFromLocalStorage = () => {
  if (cartInMemory) {
    return cartInMemory;
  } else if (typeof window !== "undefined" && window.localStorage) {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData).items : [];
  }
  return [];
};
const initialState: ICartState = {
  items: loadCartFromLocalStorage(),
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const newItem = action.payload;
      const ItemCart = state.items.find((item) => item.id === newItem.id);
      if (ItemCart) {
        ItemCart.count += 1;
      } else {
        state.items.push(newItem);
      }
      saveCartToLocalStorage(state.items);
      addCart();
    },

    deleteCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      deleteFromCart();
      saveCartToLocalStorage(state.items);
    },
    ItemsCount: (
      state,
      action: PayloadAction<{ itemId: number; increment: boolean }>
    ) => {
      const { itemId, increment } = action.payload;
      const ItemCart = state.items.find((item) => item.id === itemId);
      if (ItemCart) {
        if (increment) {
          ItemCart.count += 1;
        } else if (ItemCart.count > 1) {
          ItemCart.count -= 1;
        }
      }
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addToCart, deleteCart, ItemsCount, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
