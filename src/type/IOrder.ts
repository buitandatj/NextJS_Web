import { IProducts } from "./IProducts";

export interface IOrder {
  id: number | string;
  contactEmail: string;
  firstName: string;
  lastName: string;
  address: string;
  note: string;
  phoneNumber: string | number;
  products: any;
}
