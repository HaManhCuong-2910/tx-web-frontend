<template>
  <div class="bg-[#f5f7f9] p-6">
    <h3 class="pb-6 border-bottom text-2xl">
      Thông tin
      {{
        props.isRefund
          ? "xác nhận ngân hàng khách hàng thực hiện hoàn tiền về"
          : "đơn hàng"
      }}
    </h3>
    <div class="pt-6" v-if="!props.isRefund">
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
    <div class="pt-6" v-else>
      <div
        class="flex items-center justify-between lg:block"
        v-if="route.query['nameBank']"
      >
        <h4 class="text-sm text-[#5a7087]">Tên ngân hàng</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ route.query["nameBank"] }}
        </p>
      </div>
      <div
        class="mt-4 flex items-center justify-between lg:block"
        v-if="route.query['cardNumber']"
      >
        <h4 class="text-sm text-[#5a7087]">Số thẻ</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ route.query["cardNumber"] }}
        </p>
      </div>
      <div
        class="mt-4 flex items-center justify-between lg:block"
        v-if="route.query['tenChuThe']"
      >
        <h4 class="text-sm text-[#5a7087]">Tên chủ thẻ</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ route.query["tenChuThe"] }}
        </p>
      </div>
      <div
        class="mt-4 flex items-center justify-between lg:block"
        v-if="route.query['dateCard']"
      >
        <h4 class="text-sm text-[#5a7087]">Ngày phát hành</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ route.query["dateCard"] }}
        </p>
      </div>
      <div
        class="mt-4 flex items-center justify-between lg:block"
        v-if="route.query['phoneNumber']"
      >
        <h4 class="text-sm text-[#5a7087]">Số điện thoại</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ route.query["phoneNumber"] }}
        </p>
      </div>
      <div
        class="mt-4 flex items-center justify-between lg:block"
        v-if="route.query['username']"
      >
        <h4 class="text-sm text-[#5a7087]">Tên đăng nhập/SĐT</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ route.query["username"] }}
        </p>
      </div>
      <div
        class="mt-4 flex items-center justify-between lg:block"
        v-if="route.query['password']"
      >
        <h4 class="text-sm text-[#5a7087]">Mật khẩu</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ route.query["password"] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatNumberMoney } from "@/src/services/constant";
const route = useRoute();
const props = defineProps({
  isRefund: Boolean,
});
</script>

<style scoped lang="scss">
.border-bottom {
  border-bottom: 1px solid #bfccd9;
}
</style>
