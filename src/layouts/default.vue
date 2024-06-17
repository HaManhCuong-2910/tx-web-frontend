<template>
  <div class="container-page">
    <support-component />
    <article>
      <header-default-layout />
      <slot></slot>
    </article>
    <seo-info-component />
    <footer-default-layout />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "@/assets/scss/responsive.scss";
.container-page {
  min-height: 100%;
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
  background: url("/imgs/bg.jpg") top center no-repeat fixed;
  background-size: cover;
  background-color: #000;
  color: #fff;
  font-size: 14px;
}

@include mediaMobileTo640 {
  .container-page {
    background: url("/imgs/bg-mobile.jpg") top center no-repeat fixed;
    background-size: contain;
    background-color: #000;
  }
}
article {
  padding-top: 1.2rem;
  min-height: 100vh;
}
</style>
