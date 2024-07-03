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
        v-if="route.query['name']"
      >
        <h4 class="text-sm text-[#5a7087]">Họ tên người yêu cầu</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ route.query["name"] }}
        </p>
      </div>
      <div
        class="mt-4 flex items-center justify-between lg:block"
        v-if="route.query['phoneNumber']"
      >
        <h4 class="text-sm text-[#5a7087]">Số điện thoại khách hàng</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ route.query["phoneNumber"] }}
        </p>
      </div>
      <div
        class="mt-4 flex items-center justify-between lg:block"
        v-if="route.query['address']"
      >
        <h4 class="text-sm text-[#5a7087]">Địa chỉ</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ route.query["address"] }}
        </p>
      </div>
      <div
        class="mt-4 flex items-center justify-between lg:block"
        v-if="route.query['prices']"
      >
        <h4 class="text-sm text-[#5a7087]">Giá trị số tiền cần hoàn</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ formatNumberMoney(Number(route.query["prices"])) }}
        </p>
      </div>
      <div
        class="mt-4 flex items-center justify-between lg:block"
        v-if="route.query['codeTrans']"
      >
        <h4 class="text-sm text-[#5a7087]">Mã giao dịch</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{ route.query["codeTrans"] }}
        </p>
      </div>
      <div
        class="mt-4 flex items-center justify-between lg:block"
        v-if="route.query['dateTrans']"
      >
        <h4 class="text-sm text-[#5a7087]">Ngày giờ xảy ra giao dịch</h4>
        <p class="text-base lg:mt-1 font-medium">
          {{
            moment(route.query["dateTrans"] as string).format(
              EFormatDate.DATE_TIME_1
            )
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EFormatDate, formatNumberMoney } from "@/src/services/constant";
import moment from "moment";
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
