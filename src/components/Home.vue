<template>
  <div>
    <BlockMenu />
    <CtaGeneral />
    <div
      ref="block_price"
      :class="[
        'flex',
        $device.isMobile ? 'flex-col' : 'flex-row',
        'justify-center',
        'gap-4',
        'w-full',
      ]"
    >
      <div v-if="observerInit" class="w-11 h-11" ref="svg_price_block">
        <svg
          v-for="index in 20"
          :key="index"
          :id="`svg_bottom_${index}`"
          :style="`top: ${svgElementY + 10 * index}px; right: 3%`"
        ></svg>
      </div>
      <PriceBlock
        :class="[$device.isMobile ? 'w-full' : 'w-2/3']"
        page="home"
      />
      <div
        :class="[
          'flex',
          'flex-col',
          'items-center',
          $device.isMobile ? 'w-full px-4' : 'w-1/3 py-20',
          'gap-4',
        ]"
      >
        <span
          :class="[
            $device.isMobile ? 'mt-9 text-2xl' : 'mt-28 text-4xl pb-2',
            'border-b-2',
            'border-theme-10',
            'border-solid',
            'text-black',
            'text-center',
          ]"
          >Расчитайте стоимость похорон под любой бюджет</span
        >
        <div class="flex flex-col gap-4 py-9">
          <button
            class="w-full transition ease-in duration-1500 transform px-12 py-4 rounded-lg font-bold hover:bg-theme-10 bg-gradient-to-t from-bt-2 to-bt-1 shadow-lg shadow-black shadow-opacity-50 shadow-offset-2 shadow-radius-2 shadow-inset hover:transform hover:scale-95 hover:underline hover:text-black focus:bg-theme-10 focus:transform focus:scale-95 focus:underline focus:text-white"
            @click="openModal"
          >
            Воспользоваться калькулятором
          </button>
          <button
            class="w-full transition ease-in duration-1500 transform bg-gradient-to-t from-bt-4 to-bt-3 shadow-lg shadow-black shadow-opacity-50 shadow-offset-2 shadow-radius-2 shadow-inset px-12 py-4 rounded-lg font-bold text-black hover:bg-theme-10 hover:transform hover:scale-95 hover:underline focus:bg-theme-10 focus:transform focus:scale-95 focus:underline"
            @click="callMe"
          >
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
    <AboutForHomePage :class="[$device.isMobile ? '' : 'px-20']" />
    <InformationForHome :class="[$device.isMobile ? 'px-4' : 'px-20']" />
    <CtaGeneral class="my-4" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BlockMenu from "~/components/home/blockMenu.vue";
import CtaGeneral from "~/shared/ctaGeneral.vue";
import PriceBlock from "~/components/home/priceBlock.vue";
import AboutForHomePage from "~/components/home/about.vue";
import InformationForHome from "~/components/home/informationBlock.vue";
import declineNoun from "~/utils/decline";
import svgAnimate from "~/utils/snap";
import { Getter } from "vuex-class";


@Component({
  components: {
    BlockMenu,
    CtaGeneral,
    PriceBlock,
    AboutForHomePage,
    InformationForHome,
  },
 
  head(this) {
    return {
      title: `Похороны в ${declineNoun((this as any).CITY_G.name)}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            `Ритуальная служба - организация под ключ в ${(this as any).CITY_G.name} - Помощь в сложную минуту круглостуточно по государственным ценам с собственным транспортом без задержек.`,
        },
      ],
    };
  },
})
export default class Home extends Vue {
  @Getter("city/CITY_G") CITY_G!: any;
  
  observer = null;
  observerInit = false;
  svgElementY = null;

  get routerPath() {
    return this.$route.fullPath;
  }

  callMe() {
    window.$nuxt.$emit("callMe", true);
  }
  openModal() {
    window.$nuxt.$emit("switchModal", true);
  }
  startAnimate() {
    let allSvg = document.querySelectorAll("svg");
    svgAnimate(allSvg);
  }
  //  svgAnimate(allSvg:any) {
  //     // console.log(allSvg);
  //     Object.values(allSvg).forEach((e, i) => {
  //       if (typeof e == "object") {
  //         setTimeout(() => {
  //           let s: any = Snap(`#${cash(e).attr("id")}`);
  //           let linePath =
  //             "M1.22453 157.589C24.7438 91.5367 131.484 -46.1672 290.711 74.6921C489.746 225.766 509.414 155.878 606.16 63.7344C702.905 -28.4092 804.537 3.49177 895.911 25.8446";
  //           let lineLength = Snap.path.getTotalLength(linePath);
  //           let lineDraw = s.path(linePath);
  //           // lineDraw.gradient("l(0, 0, 0, 1)#FF0000:25-#00FF00:75-#0000FF:50");
  //           // let shadow = s.filter(Snap.filter.shadow(0, 2, 3));
  //           var f = s.filter(Snap.filter.blur(0.05, 1));
  //           lineDraw.attr({
  //             fill: "none",
  //             filter: f,
  //             strokeWidth: 20,
  //             stroke: "L(0, 0, 200, 0)#222-#f00:25-#EDC85C",
  //             "stroke-dasharray": lineLength + " " + lineLength,
  //             "stroke-dashoffset": lineLength,
  //             "stroke-width": 0.2,
  //             "stroke-linecap": "round",
  //             "stroke-linejoin": "round",
  //             "stroke-miterlimit": 10,
  //           });
  //           lineDraw.animate(
  //             {
  //               strokeDashoffset: 0,
  //             },
  //             3000,
  //             mina.easein
  //           );
  //           // let i = 0;

  //           //     lineDraw.animate(
  //           //       {
  //           //         d: "m 1.2 157.6 c 127.8 -8.6 128.8 -128.6 247.8 -151.6 c 234 -37 330.4 144.9 427.2 52.7 c 96.7 -92.1 198.3 -60.2 289.7 -37.9",
  //           //       },
  //           //       2500
  //           //     );

  //           // setTimeout(() => {
  //           //   s.remove()
  //           // }, 10000);
  //             // if (i == 0) {
  //             //   i = 1;
  //             //   lineDraw.animate(
  //             //     {
  //             //       d: "m 1.2 157.6 c 127.8 -8.6 128.8 -128.6 247.8 -151.6 c 234 -37 330.4 144.9 427.2 52.7 c 96.7 -92.1 198.3 -60.2 289.7 -37.9",
  //             //     },
  //             //     2500
  //             //   );
  //             // } else {
  //             //   i = 0;
  //             //   lineDraw.animate(
  //             //     {
  //             //       d: "M1.22453 157.589C24.7438 91.5367 131.484 -46.1672 290.711 74.6921C489.746 225.766 509.414 155.878 606.16 63.7344C702.905 -28.4092 804.537 3.49177 895.911 25.8446",
  //             //     },
  //             //     2500
  //             //   );
  //             // }
  //         }, 30 * i);
  //       }
  //     });
  //   }
  mounted() {
    window.$nuxt.$on("changePage", () => {
      // console.log("changePage");
      // setTimeout(() => {
      // this.startAnimate();
      // }, 1002);
    });
    let vm: any = this;

    function callback(entries: any, observer: any) {
      vm.observerInit = entries[0].isIntersecting;
      vm.svgElementY = entries[0].rootBounds.width - 200;
      // console.log("observer " + entries[0].isIntersecting);
      setTimeout(() => {
        if (entries[0].isIntersecting) {
          vm.startAnimate();
        }
      }, 100);

      console.log(observer);
      console.log("callback");
    }
    if (!(this as any).$device.isMobile) {
      (this as any).observer = new IntersectionObserver(callback);
      (this as any).observer.observe(this.$refs.block_price);
    }

    // this.observer.unobserve(this.$refs.block_price);
  }
}
</script>

 <style scoped>
svg {
  position: absolute;
  overflow: hidden;
  width: 450px;
  height: 200px;
  right: 1px;
}
</style>