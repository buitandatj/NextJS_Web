import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const addCart = () => {
  toast.success("Cart added successfully!", {});
};
export const deleteFromCart = () => {
  toast.warn("Deleted successfully");
};
export const orderSuccess = () => {
  toast.success("Order Success");
};
export const updateSuccess = () => {
  toast.success("Update Success");
};

export const SignUpCheck = () => {
  toast.success("Sign up success");
};
export const LoginSuccess = () => {
  toast.success("Login success");
};

export const addProduct = () => {
  toast.success("Add Product success");
};

export const CheckMail = () => {
  toast.warning("Please add email!");
};
export const checkName = () => {
  toast.warning("Please add name");
};
export const checkAddress = () => {
  toast.warning("Please add address");
};
export const checkPhone = () => {
  toast.warning("Please add phone number");
};