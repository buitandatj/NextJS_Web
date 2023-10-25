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
export const validateForm = () => {
  toast.warning("Đã có email này...");
};

export const alertLogin = () => {
  toast.warning("Vui lòng nhập...");
};
export const userName = () => {
  toast.warning("vui lòng nhập email");
};
export const password = () => {
  toast.warning("vui lòng nhập mật khẩu");
};
export const phone = () => {
  toast.warning("vui lòng nhập số điện thoại");
};
export const alertCart = () => {
  toast.warning("không có sản phẩm nào...");
};
export const nameUser = () => {
  toast.warning("Vui lòng nhập họ và tên");
};
