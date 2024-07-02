<template>
  <div ref="DateTimePickerRef" :class="props.classContainer">
    <client-only>
      <label
        :for="props.id"
        v-if="props.label"
        :class="[props.required && 'required', 'text-style fs-14']"
      >
        {{ props.label }}</label
      >
      <div class="mt-1">
        <el-date-picker
          v-model="valueDatePicker"
          type="datetime"
          :id="props.id"
          :placeholder="props.placeholder?.toLowerCase()"
          :editable="editable"
          :format="format"
          :disabled-date="props.disabledDate"
          :disabled="props.disabled"
          :cell-class-name="() => 'cell-date-time-picker-container'"
          :clearable="false"
          :class="[
            'input-date-time-picker-common text-style',
            errorMessage && meta.touched ? 'is-error' : '',
            ,
            props.class,
          ]"
          :prefix-icon="customPrefix"
          popper-class="input-date-time-picker-popper"
          @change="onChange"
        >
          <template #customPrefix> </template>
        </el-date-picker>
      </div>
      <VErrorMessage
        v-if="meta.touched"
        :name="props.name"
        :class="'error-message text-sm text-red-500'"
      />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
import { EFormatDate } from "~/src/services/constant";
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  required: Boolean,
  name: {
    type: String,
    default: "",
  },
  classContainer: String,
  disabledDate: Function,
  disabled: Boolean,
  value: [Date, String],
  class: String,
  placeholder: String,
  format: {
    type: String,
    default: EFormatDate.DATE_TIME_DEFAULT,
  },
  editable: {
    type: Boolean,
    default: true,
  },
  dateTime1: {
    type: Boolean,
    default: false,
  },
  isUpdateTime: {
    type: Boolean,
    default: false,
  },
});

const { errorMessage, meta, setTouched, setValue, validate } = useField(
  props.name,
  undefined,
  {
    initialValue: props.value,
    valueProp: props.value,
  }
);
const customPrefix = shallowRef({
  render() {
    return h("img", { src: "/imgs/calendar.svg" });
  },
});
const DateTimePickerRef = ref<HTMLElement>();
const valueDatePicker = ref<Date | string>("");

valueDatePicker.value = props.value || "";

const emit = defineEmits(["update:value", "onChange"]);

const onSetValueDatePicker = () => {
  valueDatePicker.value = props.value || "";
};

const onChange = async (value: string) => {
  let customValue = value ? moment(value).format(EFormatDate.DATE_TIME_3) : "";
  if (props.isUpdateTime) {
    const diffDay = moment()
      .startOf("day")
      .diff(moment(customValue).startOf("day"), "days");
    const diffTime = moment().diff(moment(customValue));

    if (diffTime > 0) {
      customValue = `${customValue.split(" ")[0]} ${moment()
        .add(10, "minutes")
        .format("HH:mm")}`;
    }

    if (diffDay < 0) {
      customValue = customValue.split(" ")[0] + " 00:01";
    }
  }
  valueDatePicker.value = customValue;
  emit("update:value", customValue);
  setValue(customValue);
  await validate();
  setTouched(true);
};

watch(
  () => props.value,
  () => {
    onSetValueDatePicker();
  }
);

onMounted(() => {
  onSetValueDatePicker();
});
</script>

<style scoped lang="scss">
:deep(.input-date-time-picker-common) {
  &.el-date-editor.el-input {
    width: 100%;
    height: unset;
  }

  &.is-error {
    .el-input__wrapper {
      border: 1px solid #ef4e52 !important;
      box-shadow: 0px 0px 0px 1px #f9bdbe !important;
    }
  }

  .el-input__wrapper {
    box-shadow: unset;
    border: 1px solid #bfccd9;
    padding: 2px 12px;
    flex-direction: row-reverse;

    .el-input__inner {
      font-size: 14px;
      line-height: 20px;
      &::-ms-input-placeholder {
        transform: translateY(1px);
      }

      &::placeholder {
        transform: translateY(1px);
      }
    }

    &.is-focus {
      border: 1px solid #0071a9;
      box-shadow: unset;
    }

    .el-input__prefix-inner > :last-child {
      margin-right: 0px;
    }
  }
  &.is-error {
    .el-input__wrapper {
      border: 1px solid #ef4e52 !important;
      box-shadow: 0px 0px 0px 1px #f9bdbe !important;
    }
  }
}

.error-message {
  margin-top: 4px;
  display: block;
}
</style>
