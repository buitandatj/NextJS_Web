import axios from "axios";
export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
export async function getData(category: string) {
  try {
    const res = await instance.get(`products`, {
      params: {
        category: !category || category === "all" ? undefined : category,
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
      const res = await instance.get(`products/${id}`)
      const data = res.data
      return data
  } catch (error) {
      console.log('error product detail >>', error);
  }
}