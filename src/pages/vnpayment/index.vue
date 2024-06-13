<template>
  <div class="container mx-auto pt-12">
    <payment-screen />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "payment",
});
</script>

<style scoped lang="scss">
@import "~/assets/scss/responsive.scss";
.container {
  max-width: 708px;
}

@include mediaMobileTo640 {
  .container {
    max-width: 100%;
  }
}
</style>
