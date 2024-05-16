<template>
  <div class="text-center" :class="props.class">
    <div class="form-group relative">
      <input
        :type="props.type"
        class="input-common"
        :placeholder="props.placeholder"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />
      <ClientOnly>
        <div class="custom-icon">
          <slot name="icon"></slot>
        </div>
        <div class="custom-icon-suffix">
          <slot name="icon-suffix"></slot>
        </div>
      </ClientOnly>
    </div>
    <VErrorMessage
      v-if="meta.touched"
      :name="props.name"
      :class="'error-message'"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: String,
  disabled: Boolean,
  name: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  value: [String, Number],
  class: String,
  placeholder: String,
});

const { meta, errorMessage, setTouched, setValue, validate } = useField(
  props.name,
  undefined,
  {
    initialValue: props.value,
    valueProp: props.value,
  }
);

const emit = defineEmits(["update:value", "onInput", "onBlur", "onFocus"]);

const onInput = async (event: Event) => {
  // @ts-ignore
  const value = event.target?.value as string;
  emit("update:value", value);
  setValue(value);
  await validate();
  setTouched(true);
};

const onFocus = (evt: FocusEvent) => {
  emit("onFocus", evt);
};

const onBlur = (evt: FocusEvent) => {
  emit("onBlur", evt);
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/responsive.scss";
.error-message {
  font-size: 12px;
  color: red;
}

.form-group {
  .input-common {
    width: 100%;
    height: 50px;
    background: url("/imgs/bg-input.png");
    background-size: 100% 100%;
    border: none !important;
    outline: 0 !important;
    color: #ffcc7e;
    padding-right: 45px;
    padding-left: 45px;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    text-align: center;
    font-size: 1rem;

    @include mediaMobileTo640 {
      font-size: 14px;
    }
  }

  :deep(.custom-icon) {
    svg {
      font-size: 22px;
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
      color: #565656;
    }
  }

  :deep(.custom-icon-suffix) {
    svg {
      font-size: 22px;
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
      color: #565656;
    }
  }

  @include mediaMobileTo640 {
    :deep(.custom-icon) {
      svg {
        font-size: 16px;
      }
    }

    :deep(.custom-icon-suffix) {
      svg {
        font-size: 16px;
      }
    }
  }
}
</style>
