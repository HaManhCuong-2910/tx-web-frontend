<template>
  <div class="bg-white p-4 gap-8 min-h-screen">
    <!-- <div class="lg:col-span-2">
      <info-order-component is-refund />
    </div> -->

    <div class="lg:w-3/5 mx-auto lg:px-6">
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
        <input-common1
          class-container="mt-4"
          label="Số điện thoại khách hàng"
          v-model:value="data.phoneNumber"
          :id="`phoneNumber`"
          :name="'phoneNumber'"
          :placeholder="'Nhập số điện thoại'"
          pattern="[0-9]*"
          inputMode="numeric"
          type="number"
        ></input-common1>
        <input-common1
          class-container="mt-4"
          label="Địa chỉ"
          v-model:value="data.address"
          :id="`address`"
          :name="'address'"
          :placeholder="'Nhập địa chỉ'"
        ></input-common1>
        <input-common1
          class-container="mt-4"
          label="Giá trị số tiền cần hoàn"
          v-model:value="data.prices"
          :mask="getOptionMask(EMask.NUMBER_MONEY)"
          :id="`prices`"
          :name="'prices'"
          :placeholder="'Nhập số tiền cần hoàn'"
        >
          <template #suffix>
            <p class="text-base">VND</p>
          </template>
        </input-common1>
        <input-common1
          class-container="mt-4"
          label="Mã giao dịch (nếu có)"
          v-model:value="data.codeTrans"
          :id="`codeTrans`"
          :name="'codeTrans'"
          :placeholder="'Nhập mã giao dịch'"
        ></input-common1>

        <input-date-time-picker-common
          class-container="mt-4"
          label="Ngày giờ xảy ra giao dịch"
          v-model:value="data.dateTrans"
          :id="`dateTrans`"
          :name="'dateTrans'"
          :placeholder="'hh:mm dd/mm/yyyy'"
        />

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
import { EMask, getOptionMask } from "~/src/services/constant";
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
  phoneNumber: "",
  address: "",
  prices: "",
  codeTrans: "",
  dateTrans: "",
});

const handleApi = async () => {
  loadingStore.onSetIsLoading(true);
  const body = {
    nameBank: dataChoose.value.nameBank,
    name: data.value.name,
    phoneNumber: data.value.phoneNumber,
    address: data.value.address,
    prices: data.value.prices,
    codeTrans: data.value.codeTrans,
    dateTrans: data.value.dateTrans,
  };
  const [res, error] = await useBaseFetch("/vnpay/payment-refund", {
    method: "POST",
    body,
  });
  loadingStore.onSetIsLoading(false);
  if (error) {
    ElMessage({
      message: "Không thành công, vui lòng thử lại",
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
  await handleApi();
};
</script>

<style scoped lang="scss">
.min-h-screen {
  min-height: calc(100vh - 65px - 57px);
}
</style>
