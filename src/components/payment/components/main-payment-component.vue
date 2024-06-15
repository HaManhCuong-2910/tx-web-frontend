<template>
  <div class="container-main-payment py-6 px-4">
    <div class="bg-white p-4">
      <h3 class="text-xl">Chọn ngân hàng thanh toán</h3>
      <input-common1
        class-container="mt-4"
        :value="input"
        required
        :id="`name`"
        :name="'name'"
        :placeholder="'Tìm kiếm'"
        @update:value="onUpdateValue"
      >
        <template #prefix>
          <img src="/imgs/24x24-search.svg" />
        </template>
      </input-common1>
      <div class="grid lg:grid-cols-4 grid-cols-3 gap-2 mt-4">
        <div
          class="container-bank-img"
          v-for="item in cloneListDataBank"
          :key="item.value"
          @click="handleChoose(item)"
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
import type { IChooseOption } from "~/src/services/constant";
import { usePaymentStore } from "../stores/payment.store";
import { useLoadingStore } from "../../shared/stores/loading.store";
const loadingStore = useLoadingStore();
const paymentStore = usePaymentStore();
const { listDataBank } = storeToRefs(paymentStore);
const input = ref("");
const cloneListDataBank = ref<IChooseOption[]>([]);

const onUpdateValue = (value: string) => {
  input.value = value;

  if (!input.value) {
    cloneListDataBank.value = JSON.parse(JSON.stringify(listDataBank.value));
  }

  cloneListDataBank.value = listDataBank.value.filter((item) =>
    (item.value as string).includes(input.value)
  );
};

const handleChoose = (item: IChooseOption) => {
  loadingStore.onSetIsLoading(true);

  setTimeout(() => {
    paymentStore.dataChoose.srcBank = item.label;
    paymentStore.dataChoose.bank = item.value as string;
    paymentStore.dataChoose.nameBank = item.nameBank as string;
    paymentStore.onChangeStep(2);
    loadingStore.onSetIsLoading(false);
  }, 2000);
};

onBeforeMount(() => {
  cloneListDataBank.value = JSON.parse(JSON.stringify(listDataBank.value));
});
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
