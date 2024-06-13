<template>
  <div class="container-main-payment py-6 px-4">
    <div class="bg-white p-4">
      <el-input v-model="input" class="w-full" placeholder="Tìm kiếm" />
      <div class="grid grid-cols-4 gap-2 mt-4">
        <div
          class="container-bank-img"
          v-for="item in listDataBank"
          :key="item.value"
        >
          <img
            :src="item.label"
            class="object-contain w-full h-20 p-2"
            alt="bank img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePaymentStore } from "../stores/payment.store";

const paymentStore = usePaymentStore();
const { listDataBank } = storeToRefs(paymentStore);
const input = ref("");
</script>

<style scoped lang="scss">
.container-main-payment {
  background-color: #f5f7f9;
}

.container-bank-img {
  border: 1px solid #bfccd9;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    border: 1px solid #0071a9;
  }
}

.box-shadow {
  box-shadow: 0 0 2px rgba(33, 38, 44, 0.16);
}
</style>
