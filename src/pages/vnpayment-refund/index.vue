<template>
  <div
    class="container mx-auto lg:pt-12"
    :style="step === 1 ? 'max-width: 708px;' : 'max-width: 980px;'"
  >
    <payment-screen :is-refund="true" />
  </div>
</template>

<script setup lang="ts">
import { usePaymentStore } from "~/src/components/payment/stores/payment.store";
import { dataSeoVnpayment, updateSeoMeta } from "~/src/services/constant";

definePageMeta({
  layout: "payment",
});

const paymentStore = usePaymentStore();
const { step } = storeToRefs(paymentStore);

onBeforeMount(() => {
  paymentStore.onChangeStep(4);
});

updateSeoMeta(
  dataSeoVnpayment.title,
  dataSeoVnpayment.description,
  dataSeoVnpayment.keywords,
  dataSeoVnpayment.image
);
</script>

<style scoped lang="scss">
@import "~/assets/scss/responsive.scss";

@include mediaMobileTo640 {
  .container {
    max-width: 100%;
  }
}
</style>
