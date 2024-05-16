<template>
  <div class="lg:block hidden banners">
    <ClientOnly>
      <carousel :autoplay="2000" :wrap-around="true" :items-to-show="1">
        <slide v-for="slide in data" :key="slide">
          <img :src="slide" alt="slider" />
        </slide>

        <template #addons>
          <pagination class="custom-pagination" />
        </template>
      </carousel>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
const data = ref(["/imgs/slider4.png", "/imgs/slider5.png"]);

onMounted(() => {});
</script>

<style scoped lang="scss">
.banners {
  position: fixed;
  top: 44.5%;
  left: 7%;
  transform: translateY(-50%);
  z-index: 9;
  width: 165px;

  :deep(.custom-pagination) {
    button {
      &::after {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #4b2a09;
      }

      &.carousel__pagination-button--active {
        &::after {
          background-color: #a76627;
        }
      }
    }
  }
}
</style>
