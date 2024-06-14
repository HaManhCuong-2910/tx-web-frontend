<template>
  <div class="bg-[#f5f7f9] p-6">
    <h3 class="pb-6 border-bottom text-2xl">Thông tin đơn hàng</h3>
    <div class="pt-6">
      <div class="flex items-center justify-between lg:block">
        <h4 class="text-sm text-[#5a7087]">Số tiền thanh toán</h4>
        <p class="text-xl font-medium text-[#0071a9] lg:mt-1">
          {{ formatNumberMoney(Number(route.query["sumPrices"]) || 0) }} VND
        </p>
      </div>
      <div class="mt-4 flex items-center justify-between lg:block">
        <h4 class="text-sm text-[#5a7087]">Giá trị đơn hàng</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ formatNumberMoney(Number(route.query["sumPrices"]) || 0) }} VND
        </p>
      </div>
      <div class="mt-4 flex items-center justify-between lg:block">
        <h4 class="text-sm text-[#5a7087]">Phí giao dịch</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ formatNumberMoney(0) }} VND
        </p>
      </div>
      <div class="mt-4 flex items-center justify-between lg:block">
        <h4 class="text-sm text-[#5a7087]">Mã đơn hàng</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ Math.floor(100000 + Math.random() * 900000) }}
        </p>
      </div>
      <div class="mt-4 flex items-center justify-between lg:block">
        <h4 class="text-sm text-[#5a7087]">Nhà cung cấp</h4>
        <p class="text-base lg:mt-1 font-medium">MC CTT VNPAY</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatNumberMoney } from "@/src/services/constant";
const route = useRoute();
</script>

<style scoped lang="scss">
.border-bottom {
  border-bottom: 1px solid #bfccd9;
}
</style>
