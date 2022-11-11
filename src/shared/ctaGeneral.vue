<template>
  <div :class="['flex', $device.isMobile? 'flex-col item-center px-2 text-center':'flex-row justify-around', 'gap-8', 'rounded-xl', 'bg-theme-6', 'backdrop-opacity-80', 'py-9', 'text-theme-8']">
    <div :class="['flex', 'flex-col', $device.isMobile? 'self-center':'']">
          <span
          >Горячая линия - Круглосуточно</span
        >
        <a href="tel:+73522610630" class="font-bold text-2xl"
          >+7 (3522) 610‒630</a
        >
    </div>
    <div :class="['flex', $device.isMobile? 'flex-col':'flex-row', 'gap-4']">
      <button
        class="
          transition
          ease-in
          duration-1500
          transform
          bg-theme-9
          px-12
          py-4
          rounded-sm
          font-bold
          hover:bg-theme-10 hover:transform hover:scale-95 hover:underline
          focus:bg-theme-10 focus:transform focus:scale-95 focus:underline
        "
      >Заказать звонок</button>
      <button
        class="
          transition
          ease-in
          duration-1500
          transform
          bg-theme-9
          px-12
          py-4
          rounded-sm
          font-bold
          hover:bg-theme-10 hover:transform hover:scale-95 hover:underline
          focus:bg-theme-10 focus:transform focus:scale-95 focus:underline
        "
      >Расчитать стоимость похорон</button>
    </div>
  </div>
</template>


<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CtaGeneral extends Vue {}
</script>