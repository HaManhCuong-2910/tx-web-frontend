<template>
  <form-register @on-show-success="onShowSuccess" />
  <div class="mt-10 container mx-auto">
    <img
      src="/imgs/btn_quick_play_pc.png"
      alt="chơi nhanh bản web"
      class="lg:w-[71%] w-[50%] mx-auto cursor-pointer"
    />
  </div>
  <div
    class="mt-10 container mx-auto"
    v-show="dataSuccess.username && dataSuccess.password"
  >
    <div class="relative sm:max-w-[500px] max-w-[340px] mx-auto">
      <img src="/imgs/thumb-thank.png" alt="đăng ký thành công" />
      <div class="info-success">
        <p class="sm:text-base text-xs">
          Tên đăng nhập: {{ dataSuccess.username }}
        </p>
        <p class="sm:text-base text-xs">Mật khẩu: {{ dataSuccess.password }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const dataSuccess = ref({
  username: "",
  password: "",
});

const onShowSuccess = (data: { username: string; password: string }) => {
  dataSuccess.value.username = data.username;
  dataSuccess.value.password = data.password;
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/responsive.scss";
.container {
  max-width: 466px;
}

.info-success {
  position: absolute;
  bottom: 72px;
  left: 32px;

  @include mediaMobileTo640 {
    bottom: 54px;
  }

  p {
    margin-bottom: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    -webkit-line-clamp: 1;
    font-style: italic;
  }
}
</style>
