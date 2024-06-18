import { defineStore } from "pinia";
import type { IChooseOption } from "~/src/services/constant";

export const usePaymentStore = defineStore("paymentStore", () => {
  const listDataBank = ref<IChooseOption[]>([
    {
      label: "/imgs/vietcombank.svg",
      value: "vietcombank",
      nameBank: "VietcomBank",
    },
    {
      label: "/imgs/vietinbank.svg",
      value: "vietinbank",
      nameBank: "Vietinbank",
    },
    {
      label: "/imgs/vietbank.svg",
      value: "vietbank",
      nameBank: "VietBank",
    },
    {
      label: "/imgs/bidv.svg",
      value: "bidv",
      nameBank: "Bidv",
    },
    {
      label: "/imgs/agribank.svg",
      value: "agribank",
      nameBank: "Agribank",
    },
    {
      label: "/imgs/sacombank.svg",
      value: "sacombank",
      nameBank: "Sacombank",
    },
    {
      label: "/imgs/techcombank.svg",
      value: "techcombank",
      nameBank: "Techcombank",
    },
    {
      label: "/imgs/mbbank.svg",
      value: "mbbank",
      nameBank: "MB Bank",
    },
    {
      label: "/imgs/acb.svg",
      value: "acb",
      nameBank: "Acb",
    },
    {
      label: "/imgs/vpbank.svg",
      value: "vpbank",
      nameBank: "VP Bank",
    },
    {
      label: "/imgs/dongabank.svg",
      value: "dongabank",
      nameBank: "Đông Á Bank",
    },
    {
      label: "/imgs/shb.svg",
      value: "shb",
      nameBank: "Shd",
    },
    {
      label: "/imgs/eximbank.svg",
      value: "eximbank",
      nameBank: "Eximbank",
    },
    {
      label: "/imgs/tpbank.svg",
      value: "tpbank",
      nameBank: "Tpbank",
    },
    {
      label: "/imgs/ncb.svg",
      value: "ncb",
      nameBank: "Ncb",
    },
    {
      label: "/imgs/ojb.svg",
      value: "ocen bank",
      nameBank: "Ocen Bank",
    },
    {
      label: "/imgs/msbank.svg",
      value: "msbank",
      nameBank: "MS Bank",
    },
    {
      label: "/imgs/hdbank.svg",
      value: "hdbank",
      nameBank: "HD Bank",
    },
    {
      label: "/imgs/ocb.svg",
      value: "ocb",
      nameBank: "Ocb",
    },
    {
      label: "/imgs/namabank.svg",
      value: "namabank",
      nameBank: "Nam Á Bank",
    },
    {
      label: "/imgs/scb.svg",
      value: "scb",
      nameBank: "Scb",
    },
    {
      label: "/imgs/ivb.svg",
      value: "ivb",
      nameBank: "Ivb",
    },
    {
      label: "/imgs/abbank.svg",
      value: "abbank",
      nameBank: "AB Bank",
    },
    {
      label: "/imgs/vietcapitalbank.svg",
      value: "bvbank",
      nameBank: "BV Bank",
    },
    {
      label: "/imgs/saigonbank.svg",
      value: "saigonbank",
      nameBank: "Sai Gon Bank",
    },
    {
      label: "/imgs/pvcombank.svg",
      value: "pvcombank",
      nameBank: "PVcom Bank",
    },
    {
      label: "/imgs/wooribank.svg",
      value: "wooribank",
      nameBank: "Woori Bank",
    },
    {
      label: "/imgs/kienlongbank.svg",
      value: "kienlongbank",
      nameBank: "Kien Long Bank",
    },
    {
      label: "/imgs/lienvietbank.svg",
      value: "lienvietbank",
      nameBank: "Lien Viet Bank",
    },
    {
      label: "/imgs/baovietbank.svg",
      value: "baovietbank",
      nameBank: "Bao Viet Bank",
    },
    {
      label: "/imgs/pgbank.svg",
      value: "pgbank",
      nameBank: "PG Bank",
    },
    {
      label: "/imgs/gpbank.svg",
      value: "gpbank",
      nameBank: "GP Bank",
    },
    {
      label: "/imgs/uob.svg",
      value: "uob",
      nameBank: "Uob",
    },
    {
      label: "/imgs/vrb.svg",
      value: "vrb",
      nameBank: "Vrb",
    },
    {
      label: "/imgs/vidbank.svg",
      value: "vidbank",
      nameBank: "Vid Bank",
    },
    {
      label: "/imgs/shinhanbank.svg",
      value: "shinhanbank",
      nameBank: "Shinhan Bank",
    },
    {
      label: "/imgs/mafc.svg",
      value: "mafc",
      nameBank: "",
    },
    {
      label: "/imgs/vietcredit.svg",
      value: "vietcredit",
      nameBank: "Viet Credit",
    },
  ]);

  const dataChoose = ref({
    srcBank: "",
    bank: "",
    nameBank: "",
  });

  const step = ref(1);

  const onChangeStep = (value: number) => {
    step.value = value;
  };

  return {
    listDataBank,
    dataChoose,
    step,
    onChangeStep,
  };
});
