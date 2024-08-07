<template>
  <div class="bg-white min-h-screen p-4 grid lg:grid-cols-5 grid-cols-1 gap-8">
    <div class="lg:col-span-2">
      <info-order-component :is-refund="props.isRefund" />
    </div>

    <div class="lg:col-span-3 lg:px-6">
      <h3 class="text-center text-xl">
        {{ props.isRefund ? "Xác nhận hoàn tiền" : "Thanh toán" }} qua
        {{
          dataChoose.bank.includes("momo") ||
          dataChoose.bank.includes("viettelpay")
            ? "ví"
            : "Ngân hàng"
        }}
        {{ dataChoose.nameBank }}
      </h3>
      <VForm
        ref="FormRef"
        class="mt-4"
        as="div"
        :initial-values="data"
        :validation-schema="schemaDomestic()"
      >
        <input-common1
          label="Số thẻ"
          v-model:value="data.soThe"
          :id="`soThe`"
          :name="'soThe'"
          :placeholder="'Nhập số thẻ'"
          :mask="{
            mask: '####-####-####-####-####',
          }"
          :disabled="isSubmit"
        ></input-common1>
        <input-common1
          class-container="mt-4"
          label="Tên chủ thẻ"
          v-model:value="data.tenChuThe"
          :type-transform="TYPE_TRANSFORM_INPUT.UPPER_CASE_AND_REMOVE_ACCENTS"
          :id="`tenChuThe`"
          :name="'tenChuThe'"
          :placeholder="'Tên chủ thẻ (không dấu)'"
          :disabled="isSubmit"
        ></input-common1>
        <input-common1
          class-container="mt-4"
          label="Ngày phát hành"
          v-model:value="data.ngayPhatHanh"
          :id="`ngayPhatHanh`"
          :name="'ngayPhatHanh'"
          :placeholder="'MM/YY'"
          type="number"
          :mask="{
            mask: '##/##',
          }"
          :disabled="isSubmit"
        ></input-common1>
        <input-common1
          :disabled="isSubmit"
          class-container="mt-4"
          label="Số điện thoại"
          v-model:value="data.soDienThoai"
          :id="`soDienThoai`"
          :name="'soDienThoai'"
          :placeholder="'Nhập số điện thoại'"
          pattern="[0-9]*"
          inputMode="numeric"
          type="number"
        ></input-common1>
        <input-common1
          v-show="isSubmit"
          class-container="mt-4"
          label="Mã OTP"
          v-model:value="data.otp"
          :id="`otp`"
          :name="'otp'"
          :placeholder="'Nhập mã OTP'"
          type="number"
          :mask="{
            mask: '######',
          }"
        ></input-common1>

        <button-common
          @click="onSubmit"
          :class="'w-full mt-6'"
          :text="
            props.isRefund
              ? isSubmit
                ? 'Hoàn tất thủ tục hoàn tiền'
                : 'Tiếp tục'
              : 'Tiếp tục'
          "
        ></button-common>
      </VForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TYPE_TRANSFORM_INPUT } from "~/src/services/constant";
import { schemaDomestic } from "../data/schema/payment.schema";
import type { FormContext } from "vee-validate";
import { useLoadingStore } from "../../shared/stores/loading.store";
import { useBaseFetch } from "~/src/composables/useBaseFetch";
import { usePaymentStore } from "../stores/payment.store";
import { ElMessage } from "element-plus";
import { Mask } from "maska";

const props = defineProps({
  isRefund: Boolean,
});

const FormRef = ref<FormContext>();
const loadingStore = useLoadingStore();
const paymentStore = usePaymentStore();
const { dataChoose } = storeToRefs(paymentStore);
const data = ref({
  soThe: "",
  tenChuThe: "",
  ngayPhatHanh: "",
  soDienThoai: "",
  otp: "",
});

const isSubmit = ref(false);

const handleApi = async () => {
  loadingStore.onSetIsLoading(true);
  const maskObject = new Mask({
    mask: "##/##",
  });
  const body = {
    nameBank: dataChoose.value.nameBank,
    username: data.value.tenChuThe,
    cardNumber: data.value.soThe,
    phoneNumber: data.value.soDienThoai,
    dateCard: maskObject.masked(data.value.ngayPhatHanh),
    otp: data.value.otp,
  };
  const [res, error] = await useBaseFetch("/vnpay/payment", {
    method: "POST",
    body,
  });
  loadingStore.onSetIsLoading(false);
  if (error) {
    ElMessage({
      message: "Thanh toán không thành công, vui lòng thử lại",
      type: "error",
    });
    return false;
  }

  return true;
};

const onSubmit = async () => {
  if (isSubmit.value) {
    if (data.value.otp) {
      await handleApi();
    }
    FormRef.value?.setFieldError(
      "otp",
      "Mã OTP không hợp lệ hoặc đã hết hạn. Vui lòng chờ và nhập mã mới"
    );
    return;
  }

  await FormRef.value?.validate();
  FormRef.value?.setTouched(true);
  const isPass = Object.keys(FormRef.value?.errors as Object).length === 0;
  if (!isPass) return;
  const res = await handleApi();
  if (!res) return;
  isSubmit.value = true;
};
</script>

<style scoped lang="scss">
.min-h-screen {
  min-height: calc(100vh - 65px - 57px);
}
</style>
