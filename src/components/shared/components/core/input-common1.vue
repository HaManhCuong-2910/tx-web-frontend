<template>
  <div :class="props.classContainer">
    <div>
      <div class="flex items-center">
        <label
          :for="props.id"
          v-if="props.label"
          :class="[props.required && 'required', 'text-style fs-14']"
        >
          {{ props.label }}</label
        >
        <lazy-tooltip-component
          class="ml-[16px]"
          :iconTooltip="props.iconTooltip"
          v-if="props.tooltip"
        >
          <p class="text-style colorWhite" v-html="props.tooltip"></p>
        </lazy-tooltip-component>
      </div>
      <el-input
        ref="inputRef"
        :class="[
          'input-common text-style',
          slots.append && 'input-common-append',
          props.class,
          (errorMessage && meta.touched) || props.isError ? 'is-error' : '',
          props.label && 'mt-1',
        ]"
        :model-value="props.value"
        :name="props.name"
        :placeholder="props.placeholder"
        :type="props.type === 'number' ? 'text' : props.type"
        :disabled="props.disabled"
        :id="props.id"
        :clearable="false"
        :inputMode="props.type === 'number' ? 'numeric' : inputMode"
        :pattern="props.type === 'number' ? '[0-9]*' : props.pattern"
        :autocomplete="props.autocomplete"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      >
        <template #prefix v-if="slots.prefix">
          <slot name="prefix"></slot>
        </template>
        <template #suffix>
          <slot name="suffix"> </slot>
        </template>
        <template #append v-if="slots.append">
          <slot name="append"></slot>
        </template>
      </el-input>
    </div>
    <VErrorMessage
      v-if="meta.touched"
      :name="props.name"
      :class="'error-message text-style colorBrandR700'"
    />
  </div>
</template>

<script setup lang="ts">
const slots = useSlots();

const inputRef = ref();
const isShowClear = ref(false);
const props = defineProps({
  isError: Boolean,
  pattern: String,
  inputMode: String,
  id: {
    type: String,
    default: "",
  },
  tooltip: String,
  autocomplete: {
    type: String,
    default: "off",
  },
  iconTooltip: { type: String, default: "/images/svg/info.svg" },
  label: {
    type: String,
    default: "",
  },
  required: Boolean,
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
  classContainer: String,
  placeholder: String,
  clearable: {
    type: Boolean,
    default: true,
  },
  mask: Object,
  formatSuffix: String,
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

const onInput = async (value: string) => {
  let valueCustom: string | number = value;
  if (props.type === "number") {
    valueCustom = valueCustom.replace(/\D+/g, "");
  }

  if (valueCustom) {
    isShowClear.value = true;
  }
  emit("update:value", valueCustom);
  setValue(valueCustom);
  await validate();
  setTouched(true);
};

const onFocus = (evt: FocusEvent) => {
  emit("onFocus", evt);
  if (props.value) {
    isShowClear.value = true;
  }
};

const focus = () => {
  inputRef.value.focus();
};

const onBlur = (evt: FocusEvent) => {
  isShowClear.value = false;
  emit("onBlur", evt);
};

defineExpose({ focus });
</script>

<style scoped lang="scss">
:deep(.input-common) {
  &.is-error {
    .el-input__wrapper {
      border: 1px solid #ef4e52 !important;
      box-shadow: 0px 0px 0px 1px #f9bdbe !important;
    }
  }

  .el-input__wrapper {
    box-shadow: unset;
    border: 1px solid #e8e8e8;
    border-radius: 12px;
    padding: 6px 16px;

    .el-input__inner {
      &::-ms-input-placeholder {
        transform: translateY(1px);
      }

      &::placeholder {
        transform: translateY(1px);
      }
    }

    .el-input__clear {
      position: absolute;
      right: 16px;
    }

    &.is-focus {
      border: 1px solid #4d9578;
      box-shadow: 0px 0px 0px 1px #bdd7cc;
    }
  }

  &.input-common-append {
    .el-input__wrapper {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    .el-input-group__append {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }

  .el-input__suffix {
    cursor: pointer;
  }
}
.error-message {
  margin-top: 4px;
  display: block;
}
</style>
