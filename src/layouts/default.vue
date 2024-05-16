<template>
  <support-component />
  <article>
    <header-default-layout />
    <slot></slot>
  </article>
  <seo-info-component />
  <footer-default-layout />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
article {
  padding-top: 1.2rem;
  min-height: 100vh;
}
</style>
