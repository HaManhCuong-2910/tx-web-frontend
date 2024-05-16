<template>
  <section id="seoInfo" class="container mx-auto">
    <h1>HITCLUB - APP GAME BÀI ĐỔI THƯỞNG ĐẲNG CẤP QUỐC TẾ</h1>
    <div class="py-[10px]">
      <img
        src="/imgs/giao-dien-game-bai-doi-thuong-hitclub.png"
        alt="Giao diện game bài Hit Club đẳng cấp"
      />
    </div>
    <div v-html="contentSeo"></div>
  </section>
</template>

<script setup lang="ts">
import { contentSeo } from "../data/content";
</script>

<style scoped lang="scss">
h1 {
  font-size: 22px;
  text-transform: uppercase;
  line-height: 1.2;
  font-weight: 700;
  margin: 0.67em 0;
}

:deep(p) {
  line-height: 1.6;
  margin-bottom: 1rem;
  span {
    font-size: 14px;
  }
}

#seoInfo {
  :deep(a) {
    color: #fff;
    text-shadow: 1px 1px 0 #c02e05, 1px -1px 0 #c02e05, -1px 1px 0 #c02e05,
      -1px -1px 0 #c02e05, 1px 0 0 #c02e05, 0 1px 0 #c02e05, -1px 0 0 #c02e05,
      0 -1px 0 #c02e05;
  }

  :deep(h2) {
    margin-bottom: 0.5rem;
    span {
      font-size: 20px;
      font-weight: 700;
    }
  }

  :deep(h3) {
    margin-bottom: 0.5rem;
    span {
      font-size: 20px;
      font-weight: 700;
    }
  }

  :deep(h4) {
    margin-bottom: 0.5rem;
    span {
      font-size: 16px;
      font-weight: 700;
    }
  }

  :deep(ol) {
    list-style-type: decimal;
    padding-inline-start: 40px;
    margin-bottom: 1rem;
  }

  :deep(ul) {
    list-style-type: disc;
    padding-inline-start: 40px;
    margin-bottom: 1rem;
  }
}
</style>
