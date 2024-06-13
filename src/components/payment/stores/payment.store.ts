import { defineStore } from "pinia";
import type { IChooseOption } from "~/src/services/constant";

export const usePaymentStore = defineStore("paymentStore", () => {
  const listDataBank = ref<IChooseOption[]>([
    {
      label: "/imgs/vietcombank.svg",
      value: "vietcombank",
    },
    {
      label: "/imgs/vietbank.svg",
      value: "vietbank",
    },
    {
      label: "/imgs/bidv.svg",
      value: "bidv",
    },
    {
      label: "/imgs/agribank.svg",
      value: "agribank",
    },
    {
      label: "/imgs/sacombank.svg",
      value: "sacombank",
    },
    {
      label: "/imgs/techcombank.svg",
      value: "techcombank",
    },
    {
      label: "/imgs/mbbank.svg",
      value: "mbbank",
    },
    {
      label: "/imgs/acb.svg",
      value: "acb",
    },
    {
      label: "/imgs/vpbank.svg",
      value: "vpbank",
    },
    {
      label: "/imgs/dongabank.svg",
      value: "dongabank",
    },
    {
      label: "/imgs/shb.svg",
      value: "shb",
    },
    {
      label: "/imgs/eximbank.svg",
      value: "eximbank",
    },
    {
      label: "/imgs/tpbank.svg",
      value: "tpbank",
    },
    {
      label: "/imgs/ncb.svg",
      value: "ncb",
    },
    {
      label: "/imgs/ojb.svg",
      value: "ocen bank",
    },
    {
      label: "/imgs/msbank.svg",
      value: "msbank",
    },
    {
      label: "/imgs/hdbank.svg",
      value: "hdbank",
    },
    {
      label: "/imgs/ocb.svg",
      value: "ocb",
    },
    {
      label: "/imgs/namabank.svg",
      value: "namabank",
    },
    {
      label: "/imgs/scb.svg",
      value: "scb",
    },
    {
      label: "/imgs/ivb.svg",
      value: "ivb",
    },
    {
      label: "/imgs/abbank.svg",
      value: "abbank",
    },
    {
      label: "/imgs/vietcapitalbank.svg",
      value: "bvbank",
    },
    {
      label: "/imgs/vietbank.svg",
      value: "vietbank",
    },
    {
      label: "/imgs/saigonbank.svg",
      value: "saigonbank",
    },
    {
      label: "/imgs/pvcombank.svg",
      value: "pvcombank",
    },
    {
      label: "/imgs/wooribank.svg",
      value: "wooribank",
    },
    {
      label: "/imgs/kienlongbank.svg",
      value: "kienlongbank",
    },
    {
      label: "/imgs/lienvietbank.svg",
      value: "lienvietbank",
    },
    {
      label: "/imgs/baovietbank.svg",
      value: "baovietbank",
    },
    {
      label: "/imgs/pgbank.svg",
      value: "pgbank",
    },
    {
      label: "/imgs/gpbank.svg",
      value: "gpbank",
    },
    {
      label: "/imgs/uob.svg",
      value: "uob",
    },
    {
      label: "/imgs/vrb.svg",
      value: "vrb",
    },
    {
      label: "/imgs/vidbank.svg",
      value: "vidbank",
    },
    {
      label: "/imgs/shinhanbank.svg",
      value: "shinhanbank",
    },
    {
      label: "/imgs/mafc.svg",
      value: "mafc",
    },
    {
      label: "/imgs/vietcredit.svg",
      value: "vietcredit",
    },
  ]);

  const dataChoose = ref({
    bank: "",
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
