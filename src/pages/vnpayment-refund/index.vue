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

const paymentStore = usePaymentStore();
const { step } = storeToRefs(paymentStore);
definePageMeta({
  layout: "payment",
});
</script>

<style scoped lang="scss">
@import "~/assets/scss/responsive.scss";

@include mediaMobileTo640 {
  .container {
    max-width: 100%;
  }
}
</style>
