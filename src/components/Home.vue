<template>
  <div class="shadow-2xl shadow-gray-700">
    <BlockMenu />
    <CtaGeneral />
    <div :class="['flex', $device.isMobile? 'flex-col':'flex-row', 'justify-center', 'gap-4', 'w-full']">
      <PriceBlock :class="[$device.isMobile?'w-full':'w-2/3']" />
      <div :class="['flex', 'flex-col', 'items-center', $device.isMobile? 'w-full px-4':'w-1/3 py-20', 'gap-4']">
        <span
          :class="[
            $device.isMobile ? 'mt-9 text-2xl':'mt-28 text-3xl',
            'text-bold',
            'border-b-2', 'border-theme-1', 'border-solid',
            'text-center']
          "
          >Или расчитайте стоимость похорон под любой бюджет</span
        >
        <div class="flex flex-col gap-4 py-9">
          <button
            class="
              w-full
              transition
              ease-in
              duration-1500
              transform
              bg-theme-6
              px-12
              py-4
              rounded-sm
              font-bold
              hover:bg-theme-10 hover:transform hover:scale-95 hover:underline
              hover:text-black
              focus:bg-theme-10 focus:transform focus:scale-95 focus:underline
              focus:text-black
            "
          >
            Воспользоваться калькулятором
          </button>
          <button
            class="
              w-full
              transition
              ease-in
              duration-1500
              transform
              bg-theme-9
              px-12
              py-4
              rounded-sm
              font-bold
              text-black
              hover:bg-theme-10 hover:transform hover:scale-95 hover:underline
              focus:bg-theme-10 focus:transform focus:scale-95 focus:underline
            "
          >
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
    <AboutForHomePage />
    <InformationForHome />
    <CtaGeneral />

     
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import BlockMenu from "~/components/home/blockMenu.vue";
import CtaGeneral from "~/shared/ctaGeneral.vue";
import PriceBlock from "~/components/home/priceBlock.vue";
import AboutForHomePage from '~/components/home/about.vue'
import InformationForHome from '~/components/home/informationBlock.vue'

@Component({
  components: { BlockMenu, CtaGeneral, PriceBlock, AboutForHomePage, InformationForHome },
})
export default class Home extends Vue {}
</script>

 