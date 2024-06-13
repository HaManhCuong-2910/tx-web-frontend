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
}
