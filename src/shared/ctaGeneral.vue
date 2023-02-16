<template>
  <div
    :class="[
      'flex',
      $device.isMobile
        ? 'flex-col item-center px-2 text-center'
        : 'flex-row justify-around',
      'gap-8',
      'rounded-xl',
      'bg-theme-13',
      'backdrop-opacity-80',
      'py-9',
      'text-theme-8',
    ]"
  >
    <div :class="['flex', 'flex-col', $device.isMobile ? 'self-center' : '']">
      <span>Горячая линия - Круглосуточно</span>
      <a href="tel:+73522610630" class="font-bold text-2xl"
        >+7 (3522) 610‒630</a
      >
    </div>
    <div :class="['flex', $device.isMobile ? 'flex-col gap-2' : 'flex-row gap-4']">
      <button
        class="
          transition
          ease-in
          duration-1500
          transform
          bg-gradient-to-t
          from-bt-2
          to-bt-1
          px-12
          rounded-sm
          shadow-lg
          shadow-black
          shadow-opacity-50
          shadow-offset-2
          shadow-radius-2
          shadow-inset
          font-bold
          hover:bg-gradient-to-b hover:transform hover:scale-95 hover:underline
          focus:bg-gradient-to-b focus:transform focus:scale-95 focus:underline
        "
        :class="[!$device.isMobile ? 'py-2' : 'py-4']"
        @click="callMe"
      >
        Заказать звонок
      </button>
      <button
        class="
          transition
          ease-in
          duration-1500
          transform
          bg-gradient-to-t
          from-bt-2
          to-bt-1
          px-12
          py-2
          rounded-sm
          shadow-lg
          shadow-black
          shadow-opacity-50
          shadow-offset-2
          shadow-radius-2
          shadow-inset
          font-bold
          hover:bg-gradient-to-b hover:transform hover:scale-95 hover:underline
          focus:bg-gradient-to-b focus:transform focus:scale-95 focus:underline
        "
        @click="openModal"
      >
        Расчитать стоимость похорон
      </button>
    </div>
  </div>
</template>


<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CtaGeneral extends Vue {
  openModal() {
    window.$nuxt.$emit("switchModal", true);
  }
  callMe() {
    window.$nuxt.$emit("callMe", true);
  }
}
</script>