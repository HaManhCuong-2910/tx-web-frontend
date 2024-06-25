import * as yup from "yup";
export const schemaRefundPayment = () => {
  return yup.object({
    name: yup.string().required("Họ tên người yêu cầu không được bỏ trống"),
  });
};
