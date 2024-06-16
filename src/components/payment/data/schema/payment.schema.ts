import * as yup from "yup";
export const schemaDomestic = () => {
  return yup.object({
    tenChuThe: yup.string().required("Tên chủ thẻ không được bỏ trống"),
    soThe: yup.string().required("Số thẻ không được bỏ trống"),
    soDienThoai: yup
      .string()
      .required("Số điện thoại không được bỏ trống")
      .test("is_valid_phone", "Số điện thoại không hợp lệ", (value) => {
        const regexPhoneNumber = /(0[3|5|7|8|9])+([0-9]{8})\b/g;

        return !!value.match(regexPhoneNumber);
      }),
    ngayPhatHanh: yup.string().required("Ngày phát hành không được bỏ trống"),
  });
};
