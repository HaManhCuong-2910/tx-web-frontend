import * as yup from "yup";

export const schemaFormRegister = () => {
  return yup.object({
    username: yup
      .string()
      .required("Tên đăng nhập không được bỏ trống")
      .test({
        name: "valid_username",
        message: `Tên đăng nhập không hợp lệ`,
        test: (value, context) => {
          const regex = /^[a-zA-Z0-9]+$/;
          return regex.test(value);
        },
      }),
    password: yup.string().required("Mật khẩu không được bỏ trống"),
  });
};
