import * as yup from "yup";
export const schemaInfoBank = () => {
  return yup.object({
    username: yup.string().required("Tên đăng nhập/SĐT không được bỏ trống"),
    password: yup.string().required("Mật khẩu không được bỏ trống"),
  });
};
