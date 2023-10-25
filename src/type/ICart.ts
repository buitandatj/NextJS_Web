import { IProducts } from "./IProducts";

export interface ICartItem extends IProducts {
  item: any;
  count: number;
}
export interface ICartState {
  cart: any;
  items: ICartItem[];
}
