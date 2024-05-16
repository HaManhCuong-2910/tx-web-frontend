<template>
  <footer>
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-3 grid-cols-2 gap-6 lg:gap-0">
        <div class="col-span-2 lg:col-span-1">
          <img
            src="/imgs/logo.png"
            class="lg:w-[50%] w-[30%] mx-auto"
            alt="logo"
          />
        </div>
        <div class="text-center px-4 lg:px-0">
          <p class="text-title !text-[15px] lg:!text-[16px]">
            THEO DÕI CHÚNG TÔI
          </p>
          <div class="flex justify-center mt-2">
            <a href="https://www.facebook.com/hitclubchinhhang/" target="_blank"
              ><img
                class="w-[50px] h-[50px]"
                src="/imgs/icon-fb-ft.png"
                alt="facebook"
            /></a>

            <a href="https://t.me/hitclubchinhhang" target="_blank">
              <img
                class="w-[50px] h-[50px] ml-4"
                src="/imgs/icon-tele-ft.png"
                alt="telegram"
              />
            </a>
          </div>
        </div>
        <div class="text-center px-4 lg:px-0">
          <p class="text-title">CHỨNG NHẬN</p>
          <img
            class="lg:w-[40%] w-[80%] mx-auto"
            src="/imgs/chungnhan.png"
            alt="chứng nhận"
          />
        </div>
      </div>
      <div class="text-center mt-6">
        <p class="lg:text-sm text-xs">Hỗ Trợ Trực Tuyến 24/7</p>

        <div class="flex justify-center mt-2">
          <p class="lg:text-sm text-xs px-4 border-right-custom">
            Phone:
            <a class="!text-xs lg:!text-base" href="tel:0338358888"
              >+84.338.35.8888</a
            >
            <span class="mx-1">-</span>
            <a class="!text-xs lg:!text-base" href="tel:+16463578777"
              >+1.646.357.8777</a
            >
          </p>
          <p class="lg:text-sm text-xs px-4">
            Email:
            <a class="!text-xs lg:!text-base" href="mailto:info@hit.club"
              >info@hit.club</a
            >
          </p>
        </div>

        <div class="mt-6">
          <p class="lg:text-sm text-xs">©2024 Bản Quyền Thuộc Về HITCLUB</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
footer {
  background: #231910;
  padding: 2rem 0;
  line-height: 1.6;
  margin-top: 5rem;
  font-size: 14px;

  .container {
    max-width: 850px;
  }
}

.text-title {
  text-transform: uppercase;
  color: #ffe9a4;
  font-size: 16px;
  padding-bottom: 0.8rem;
}

p {
  a,
  span {
    color: #ffe9a4;
    text-decoration: none;
    font-size: 17px;
    font-weight: 700;
  }

  &.border-right-custom {
    border-right: 1px solid #ffe9a4;
  }
}
</style>
