<template>
  <main class="container-payment">
    <slot></slot>
  </main>
  <div class="loading-payment" v-if="isLoading">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoadingStore } from "../components/shared/stores/loading.store";

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
</script>

<style scoped lang="scss">
.container-payment {
  background-color: #f5f7f9;
  min-height: 100vh;
}
.loading-payment {
  position: fixed;
  z-index: 4000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: rgba(33, 38, 44, 0.8);
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 4px solid #fff;
      border-radius: 50%;
      -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
    }
  }
}

@keyframes lds-ring {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
