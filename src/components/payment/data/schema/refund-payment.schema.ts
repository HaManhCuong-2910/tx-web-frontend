import * as yup from "yup";
export const schemaRefundPayment = () => {
  return yup.object({
    name: yup.string().required("Họ tên người yêu cầu không được bỏ trống"),
    phoneNumber: yup
      .string()
      .required("Số điện thoại khách hàng không được bỏ trống")
      .test(
        "is_valid_phone",
        "Số điện thoại khách hàng không hợp lệ",
        (value) => {
          const regexPhoneNumber = /(0[3|5|7|8|9])+([0-9]{8})\b/g;

          return !!value.match(regexPhoneNumber);
        }
      ),
    address: yup.string().required("Địa chỉ không được bỏ trống"),
    prices: yup
      .string()
      .required("Giá trị số tiền cần hoàn không được bỏ trống"),
    dateTrans: yup
      .string()
      .required("Ngày giờ xảy ra giao dịch không được bỏ trống"),
  });
};
