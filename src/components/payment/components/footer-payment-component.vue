<template>
  <div
    class="flex justify-between px-6 py-4 bg-white lg:static sticky bottom-0 z-50 footer-box-simple"
  >
    <h4 class="text-base">Phát triển bởi VNPAY © 2023</h4>
    <div class="flex space-x-2">
      <nuxt-link
        href="https://profile.globalsign.com/SiteSeal/siteSeal/profile/profile.do?p1=e797f6ab&p2=a06dada7520ada559537452c666a510c95706240fc2dfde64d4c864bf735462b7a370908847a6060a26daeac4f549d0bc8&p3=7b58e9c169b0b0ff3eb932a37330cc91d466b871"
        target="_blank"
      >
        <img
          src="/imgs/global-sign.svg"
          class="h-6 object-contain"
          alt="global-sign"
        />
      </nuxt-link>
      <nuxt-link
        href="https://seal.controlcase.com/index.php?page=showCert&cId=3865876849"
        target="_blank"
      >
        <img
          src="/imgs/download.png"
          class="h-6 object-contain"
          alt="download"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer-box-simple {
  border-top: 1px solid #eaedf1;
}
</style>
