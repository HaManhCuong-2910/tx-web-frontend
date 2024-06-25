<template>
  <div class="bg-white p-4 grid lg:grid-cols-5 grid-cols-1 gap-8">
    <div class="lg:col-span-2">
      <info-order-component is-refund />
    </div>

    <div class="lg:col-span-3 lg:px-6">
      <h3 class="text-center text-xl">
        Xác nhận hoàn tiền qua Ngân hàng {{ dataChoose.nameBank }}
      </h3>
      <VForm
        ref="FormRef"
        class="mt-4"
        as="div"
        :initial-values="data"
        :validation-schema="schemaRefundPayment()"
      >
        <input-common1
          label="Họ tên người yêu cầu"
          v-model:value="data.name"
          :id="`name`"
          :name="'name'"
          :placeholder="'Nhập họ tên người yêu cầu'"
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
import { schemaRefundPayment } from "../data/schema/refund-payment.schema";
import type { FormContext } from "vee-validate";
import { useLoadingStore } from "../../shared/stores/loading.store";
import { useBaseFetch } from "~/src/composables/useBaseFetch";
import { usePaymentStore } from "../stores/payment.store";
import { ElMessage } from "element-plus";

const FormRef = ref<FormContext>();
const loadingStore = useLoadingStore();
const paymentStore = usePaymentStore();
const { dataChoose } = storeToRefs(paymentStore);
const data = ref({
  name: "",
  prices: "",
  tradingCode: "",
  date: "",
});

const handleApi = async () => {
  loadingStore.onSetIsLoading(true);
  const body = {};
  const [res, error] = await useBaseFetch("/vnpay/payment-info-bank", {
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
  await FormRef.value?.validate();
  FormRef.value?.setTouched(true);
  const isPass = Object.keys(FormRef.value?.errors as Object).length === 0;
  if (!isPass) return;
  console.log("pass");
};
</script>

<style scoped></style>
