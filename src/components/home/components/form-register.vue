<template>
  <section id="form" class="container mx-auto">
    <div class="container-form">
      <div class="tab-register">
        <img src="/imgs/tab-dangky.png" alt="" />
      </div>

      <VForm
        ref="FormRef"
        as="div"
        class="grid grid-cols-1 gap-3 w-[78%] mx-auto"
        :validation-schema="schemaFormRegister()"
      >
        <input-common
          name="username"
          v-model:value="data.username"
          placeholder="Tên đăng nhập"
        >
          <template #icon>
            <font-awesome-icon :icon="['fas', 'user']" />
          </template>
        </input-common>
        <input-common
          name="password"
          :type="isHidePassword ? 'password' : 'text'"
          v-model:value="data.password"
          placeholder="Mật khẩu"
          :class="'lg:mb-4'"
        >
          <template #icon>
            <font-awesome-icon :icon="['fas', 'lock']" />
          </template>
          <template #icon-suffix>
            <font-awesome-icon
              class="cursor-pointer"
              @click="isHidePassword = !isHidePassword"
              :icon="['fas', isHidePassword ? 'eye' : 'eye-slash']"
            />
          </template>
        </input-common>

        <img
          src="/imgs/btn-dangky.png"
          @click="onRegister"
          alt="button đăng ký"
          class="btn-register cursor-pointer"
        />
      </VForm>
    </div>
  </section>

  <el-dialog
    v-model="isShowDialog"
    width="500"
    :modal-class="'container-dialog-custom'"
    align-center
  >
    <img
      src="/imgs/icon_close.png"
      alt="icon"
      class="icon-close-full-dialog"
      @click="isShowDialog = false"
    />

    <h4 class="dialog-title">THÔNG BÁO</h4>
    <p class="dialog-text">{{ messageError }}</p>
  </el-dialog>
</template>

<script setup lang="ts">
import type { FormContext } from "vee-validate";
import { schemaFormRegister } from "../data/schema/form-register.schema";
import { useBaseFetch } from "~/src/composables/useBaseFetch";

const isShowDialog = ref(false);
const messageError = ref("");
const FormRef = ref<FormContext>();

const data = ref({
  username: "",
  password: "",
});

const isHidePassword = ref(true);

const emit = defineEmits(["onShowSuccess"]);

const onRegister = async () => {
  await FormRef.value?.validate();
  FormRef.value?.setTouched(true);
  const isPass = Object.keys(FormRef.value?.errors as Object).length === 0;

  if (!isPass) return;

  const body = {
    username: data.value.username,
    password: data.value.password,
  };

  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });

  const [res, error] = await useBaseFetch("/auth/register", {
    method: "POST",
    body,
  });

  loading.close();

  if (!res) {
    isShowDialog.value = true;
    messageError.value = error;
    return;
  }

  emit("onShowSuccess", data.value);

  console.log("res", res);
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/responsive.scss";
.container {
  max-width: 466px;
}
.dialog-title {
  width: 100%;
  display: inline-block;
  color: #ffe400;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
}
.dialog-text {
  font-size: 16px;
  color: #f20000;
  padding: 1rem 0;
  width: 100%;
  text-align: center;
  font-weight: 500;
}
.container-form {
  background: url("/imgs/bg-form.png") top center no-repeat;
  background-size: 100% 100%;
  padding: 1.1rem 0 1.6rem 0;
  padding-top: 1rem;

  .tab-register {
    margin: 0 auto 1.8rem;
    width: 30%;
  }

  .btn-register {
    width: 72%;
    margin: auto;
  }

  @include mediaMobileTo640 {
    max-width: 91%;
    margin: auto;
  }
}
</style>
