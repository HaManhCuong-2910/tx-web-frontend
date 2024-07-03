<template>
  <div class="custom-payment">
    <header-payment-component />
    <client-only>
      <main-payment-component :is-refund="props.isRefund" v-if="step === 1" />
      <form-payment-component :is-refund="props.isRefund" v-if="step === 2" />
      <form-payment-info-bank-component
        :is-refund="props.isRefund"
        v-if="step === 3"
      />
      <form-refund-payment-component v-if="step === 4" />
    </client-only>
    <footer-payment-component />
  </div>
</template>

<script setup lang="ts">
import { usePaymentStore } from "../stores/payment.store";

const paymentStore = usePaymentStore();
const { step } = storeToRefs(paymentStore);

const props = defineProps({
  isRefund: Boolean,
});
</script>

<style scoped lang="scss">
.custom-payment {
  box-shadow: 0 2px 8px rgba(33, 38, 44, 0.16);
}
</style>
