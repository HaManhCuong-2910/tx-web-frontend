<template>
  <div class="custom-payment">
    <header-payment-component />
    <main-payment-component v-if="step === 1" />
    <form-payment-component v-if="step === 2" />
    <footer-payment-component />
  </div>
</template>

<script setup lang="ts">
import { usePaymentStore } from "../stores/payment.store";

const paymentStore = usePaymentStore();
const { step } = storeToRefs(paymentStore);
</script>

<style scoped lang="scss">
.custom-payment {
  box-shadow: 0 2px 8px rgba(33, 38, 44, 0.16);
}
</style>
