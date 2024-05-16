<template>
  <header>
    <div class="container mx-auto">
      <div class="mx-auto container-logo">
        <img src="/imgs/logo.png" alt="logo" />
      </div>
      <div class="mx-auto container-slogan mt-2 mb-11">
        <img src="/imgs/slogan.png" alt="slogan" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  max-width: 466px;
}
.container-logo {
  width: 33%;

  img {
    object-fit: contain;
  }
}

.container-slogan {
  width: 62%;
  img {
    object-fit: contain;
  }
}
</style>
