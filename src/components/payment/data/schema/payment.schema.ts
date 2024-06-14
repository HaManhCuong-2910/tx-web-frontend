import * as yup from "yup";
export const schemaDomestic = () => {
  return yup.object({
    tenChuThe: yup.string().required("Tên chủ thẻ không được bỏ trống"),
    soThe: yup.string().required("Số thẻ không được bỏ trống"),
    ngayPhatHanh: yup.string().required("Ngày phát hành không được bỏ trống"),
  });
};
