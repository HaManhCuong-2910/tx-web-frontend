<template>
  <div class="social-list">
    <a
      href="tel:0338358888"
      class="icon-phone !hidden lg:!block"
      aria-label="Liên hệ Hotline Hitclub"
      title="Liên hệ Hotline Hitclub"
    >
      <img src="/imgs/btn-phone1.png" alt="Liên hệ Hotline Hitclub" />
    </a>
    <a
      href="tel:0338358888"
      class="icon-phone lg:!hidden"
      aria-label="Liên hệ Hotline Hitclub"
      title="Liên hệ Hotline Hitclub"
    >
      <img src="/imgs/icon-phone.png" alt="Liên hệ Hotline Hitclub" />
    </a>
    <a
      class="icon-phone lg:!hidden mt-2 cursor-pointer"
      aria-label="Chat với Hitclub"
      title="Chat với Hitclub"
      @click="onShowChat"
    >
      <img src="/imgs/icon-chat.png" alt="Chat với Hitclub" />
    </a>
    <a
      href="tel:+16463578777"
      class="icon-phone mt-2 !hidden lg:!block"
      aria-label="Gọi đến Hitclub"
      title="Gọi đến Hitclub"
    >
      <img src="/imgs/btn-phone1.png" alt="Gọi đến Hitclub" />
    </a>
  </div>

  <div class="social_bottom flex lg:flex-row flex-col-reverse lg:space-x-4">
    <a
      href="https://www.facebook.com/hitclubchinhhang/"
      aria-label="Theo dõi fanpage Hitclub"
      class="icon-social mt-2 lg:mt-0"
      title="Theo dõi fanpage Hitclub"
      target="_blank"
    >
      <img src="/imgs/icon-fb.png" alt="Theo dõi fanpage Hitclub" />
    </a>
    <a
      href="https://t.me/hitclubchinhhang"
      aria-label="Cổng telegram của Hitclub chính thức"
      class="icon-social"
      title="Cổng telegram của Hitclub chính thức"
      target="_blank"
    >
      <img
        src="/imgs/icon-tele.png"
        alt="Cổng telegram của Hitclub chính thức"
      />
    </a>
  </div>

  <a
    class="btn-livechat lg:block hidden cursor-pointer"
    @click="onShowChat"
    aria-label="Chat với Hitclub"
    title="Chat với Hitclub"
  >
    <img src="/imgs/btn-livechat.png" alt="Chat với Hitclub" />
  </a>
</template>

<script setup lang="ts">
const onShowChat = () => {
  // @ts-ignore
  LC_API.open_chat_window();
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/responsive.scss";
.social-list {
  position: fixed;
  right: 4.1%;
  top: 25%;
  z-index: 9;
  text-align: right;

  a {
    display: block;
    height: 38px;
    width: 166px;
  }
}

.social_bottom {
  position: fixed;
  bottom: 55px;
  right: 5.6%;
  z-index: 9;

  .icon-social {
    display: block;
    width: 35px;
    height: 35px;
  }
}

.btn-livechat {
  position: fixed;
  right: 4.1%;
  bottom: 0;
  width: 147px;
  height: 40px;
}

@include mediaMobileTabletTo1280 {
  .social_bottom {
    top: 10px;
    left: 1rem;
    bottom: unset !important;
    right: unset !important;

    a {
      width: 50px !important;
      height: 50px !important;
    }
  }

  .social-list {
    top: 10px;
    right: 1rem;

    a {
      width: 50px !important;
      height: 50px !important;
    }
  }
}
</style>
