export const updateSeoMeta = (
  title: string,
  description: string,
  keywords: string,
  image?: string
) => {
  useHead({
    title,
  });
  useSeoMeta({
    ogTitle: title,
    description: description,
    ogDescription: description,
    keywords,
    robots: "index, follow",
    ogImage: image,
  });
};

export const dataSeoHome = {
  title: "Hitclub - Tải Hit Club, Đăng Ký, Đăng Nhập Chính Thức",
  description:
    "Hit Club - Game bài đổi thưởng điện thoại: Ios, Android, Apk. Tải Hitclub chính thức chơi tài xỉu, xóc đĩa, bắn cá đổi tiền thật!",
  keywords: "Hit Club, Hitclub, game bài đổi thưởng, tải Hitclub",
  image: "/imgs/logo.png",
};

export const dataSeoVnpayment = {
  title: "Dịch vụ hoàn tiền ngân hàng",
  description: `𝐇Ỗ 𝐓𝐑Ợ 𝐋Ấ𝐘 𝐋Ạ𝐈 𝐓𝐈Ề𝐍 𝐓𝐑𝐄𝐎 𝐓𝐑Ê𝐍 𝐌Ọ𝐈 𝐍Ề𝐍 𝐓Ả𝐍𝐆 !!!
✅ Thu hồi tiền chuyển nhầm qua SỐ TÀI KHOẢN.
✅ Thu hồi tiền kẹt trong các app, sàn chứng khoán , nhiệm vụ shoppe , lazzada ,Tiki..v.v..
✅ Тhu hồi lại tất ᴄả тɪềп đã chuyển trên không gian mạng => Ib để được Luật Sư tư vấn miễn phí Dưới đây là liên kết kết nối đến nhân viên pháp lý`,
  keywords: "hoan tien ngan hang",
  image: "/imgs/logo-payment.jpg",
};

export const listMetaTagDefault = [
  {
    name: "viewport",
    content:
      "width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=1, user-scalable=0",
  },
  {
    name: "format-detection",
    content: "telephone=no, date=no, address=no, email=no",
  },
];

export interface IChooseOption {
  label: string;
  value: string | number;
  nameBank?: string;
}

export const formatNumberMoney = (value: number | string) => {
  let valueNumber = value;
  if (typeof value !== "string") {
    valueNumber = Number(value);
  }
  const formater = new Intl.NumberFormat("vi-VN");
  return formater.format(valueNumber as number).split(",")[0];
};

export enum ETypeButton {
  primary = "primary",
  secondary = "secondary",
}

export enum ENativeTypeButton {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export enum TYPE_TRANSFORM_INPUT {
  UPPER_REMOVE_SPACE = 1,
  UPPER_CASE = 2,
  UPPER_CASE_AND_REMOVE_ACCENTS = 3,
  LOWER_CASE_AND_REMOVE_ACCENTS_SPACE = 4,
  BIEN_SO_XE_CHARACTERS = 5,
  UPPER_CASE_AND_REMOVE_ACCENTS_SPACE = 6,
  REMOVE_SPACE = 7,
}

export const onTransformValueType = (type: number, value: any) => {
  if (!value) return value;
  switch (type) {
    case TYPE_TRANSFORM_INPUT.UPPER_REMOVE_SPACE:
      return value.toUpperCase().split(" ").join("");
    case TYPE_TRANSFORM_INPUT.UPPER_CASE:
      return value.toUpperCase();
    case TYPE_TRANSFORM_INPUT.UPPER_CASE_AND_REMOVE_ACCENTS:
      return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();
    case TYPE_TRANSFORM_INPUT.UPPER_CASE_AND_REMOVE_ACCENTS_SPACE:
      return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "")
        .toUpperCase();
    case TYPE_TRANSFORM_INPUT.LOWER_CASE_AND_REMOVE_ACCENTS_SPACE:
      return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "")
        .toLowerCase();
    case TYPE_TRANSFORM_INPUT.BIEN_SO_XE_CHARACTERS:
      return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "")
        .toUpperCase()
        .replace(/[^A-Z0-9\-\.\_]*$/g, "");
    case TYPE_TRANSFORM_INPUT.REMOVE_SPACE:
      return value.replace(/\s/g, "");

    default:
      return value;
  }
};

export enum EMask {
  DEFAULT = "DEFAULT",
  NUMBER_MONEY = "NUMBER_MONEY",
}

export enum EFormatDate {
  DEFAULT = "DD/MM/YYYY",
  DATE_TIME_DEFAULT = "HH:mm DD/MM/YYYY",
  DATE_TIME_1 = "DD/MM/YYYY HH:mm",
  DATE_TIME_2 = "HH:mm | DD/MM/YYYY",
  DATE_TIME = "HH:mm - DD/MM/YYYY",
  DATE_TIME_3 = "YYYY-MM-DD HH:mm",
  TIME_PICKER = "HH:mm",
}

export const getOptionMask = (mask: EMask | string) => {
  switch (mask) {
    case EMask.NUMBER_MONEY:
      return {
        mask: "A.AA#.###",
        tokens: {
          A: {
            pattern: /[0-9]/,
            repeated: true,
          },
        },
        reversed: true,
      };
    case EMask.DEFAULT:
    default:
      return {
        mask,
      };
  }
};
