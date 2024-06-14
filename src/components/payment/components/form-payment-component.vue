<template>
  <div class="bg-white p-4 grid lg:grid-cols-5 grid-cols-1 gap-8">
    <div class="lg:col-span-2">
      <info-order-component />
    </div>

    <div class="lg:col-span-3 lg:px-6">
      <h3 class="text-center text-xl">Thanh toán qua Ngân hàng VietinBank</h3>
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
          label="Số thẻ"
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
          text="Tiếp tục"
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

const FormRef = ref<FormContext>();
const loadingStore = useLoadingStore();
const data = ref({
  soThe: "",
  tenChuThe: "",
  ngayPhatHanh: "",
  otp: "",
});

const isSubmit = ref(false);

const onSubmit = async () => {
  if (isSubmit.value) {
    FormRef.value?.setFieldError("otp", "Mã OTP không chính xác");
    return;
  }

  await FormRef.value?.validate();
  FormRef.value?.setTouched(true);
  const isPass = Object.keys(FormRef.value?.errors as Object).length === 0;
  console.log("isPass", isPass);
  if (!isPass) return;
  loadingStore.onSetIsLoading(true);
  setTimeout(() => {
    loadingStore.onSetIsLoading(false);
    isSubmit.value = true;
  }, 2000);
};
</script>

<style scoped></style>