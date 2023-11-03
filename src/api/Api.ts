import { titleCase } from "@/helper/titleCase";
import axios from "axios";
export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

//get Product
export async function getData(category?: string) {
  try {
    const res = await instance.get(`productsNext`, {
      params: {
        category:
          !category || category === "all" ? undefined : titleCase(category),
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log("error products data >>", error);
  }
}
export async function getProduct(id: string) {
  try {
    const res = await instance.get(`productsNext/${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log("error product detail >>", error);
  }
}

//add Product
export async function addProductAdmin(url: string, productData: object) {
  try {
    const res = await instance.post(url, productData);
    return res.data;
  } catch (error) {
    console.log("Error adding product: ", error);
  }
}

//delete product
export async function deleteProduct(productId: number) {
  try {
    const res = await instance.delete(`productsNext/${productId}`);
    return res.data;
  } catch (error) {
    console.log("Error deleting product: ", error);
  }
}

//get User
export const getUser = async (url: string) => {
  try {
    const res = await instance.get(url);
    return res.data;
  } catch (error) {
    console.log("get user error", error);
  }
};
//add user
export const addUser = async (url: string, userData: object) => {
  try {
    const res = await instance.post(url, userData);
    return res.data;
  } catch (error) {
    console.log("get user error", error);
  }
};
export const deleteUser = async (UserId: string | number | any) => {
  try {
    const res = await instance.delete(`usersNext/${UserId}`);
    return res.data;
  } catch (error) {
    console.log("get user error", error);
  }
};
//get Order
export const getOrders = async () => {
  try {
    const res = await instance.get("ordersNext");
    return res.data;
  } catch (error) {
    console.log("get orders error", error);
  }
};
//delete Order
export const deleteOrder = async (id: string | number) => {
  try {
    const res = await instance.delete(`ordersNext/${id}`);
    return res.data;
  } catch (error) {}
};
