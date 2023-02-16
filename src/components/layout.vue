<template>
  <main
    :class="[
      'font-raleway',
      'bg-theme-16',
      $route.name == 'index' ? 'text-white' : 'text-black',
      !$device.isMobile && $route.name == 'index'? 'img_bck' : '',
    ]"
  >
    <div>
      <notifications class="rounded-xl text-theme-8 font-semibold" />
    </div>
    <div class="site__container">
      <div
        :class="[
          !$device.isMobile && computedProp ? 'img-position h-screen' : '',
        ]"
        ref="header"
      >
        <header :class="[$device.isMobile ? 'px-2' : 'px-6']">
          <div v-if="observerInit && $route.name == 'index'" ref="header_svg">
            <svg
              v-for="(item, index) in 30"
              :key="index"
              :id="`svg_${index}`"
              :style="`top: ${155 + index * 10}px; height: ${
                700 - index * 10
              }px;`"
            ></svg>
          </div>

          <Header
            :hoverEnable="$route.name == 'index' ? true : false"
            :enable="true"
          />
        </header>
      </div>

      <section
        id="content"
        :class="[
          'site__body',
          !modalOpen && !openCallMe  ? 'back_wraper' : '',
          'xl:py-4',
          $device.isMobile ? 'px-2' : 'px-6',
          'h-full',
        ]"
      >
        <PopUpCall v-if="openCallMe" />
        <slot />
        <ModalDialog v-if="modalOpen" />
      </section>

      <footer
        :class="[
          'site__footer',
          'xl:pt-14',
          $device.isMobile ? 'px-2' : 'px-6',
        ]"
      >
        <Footer />
      </footer>
    </div>

    <!-- <Backtotop /> -->
    
  </main>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";
import { Getter } from "vuex-class";
import ModalDialog from "~/shared/modalDialog.vue";

@Component({ components: { ModalDialog } })
export default class Layout extends Vue {
  @Getter("hover/getHoverStatus") hoverEnable;

  // head() {
  //   return {
  //     bodyAttrs: {
  //       class: this.bodyClasses,
  //     },
  //   };
  // }
  // hoverEnable = true;

  get computedProp() {
    return this.$route.name == "index" ? true : false;
  }

  bodyClasses = ["disable-transitions"];
  observer = null;
  observerInit = false;
  openCallMe = false;
  modalOpen = false;

  @Watch("computedProp")
  onRouteChange() {
    this.bodyClasses = ["disable-transitions"];
    this.$nextTick(() => {
      this.bodyClasses = [];
    });
    this.init();
  }

  init() {
    let vm = this;

    function callback(entries, observer) {
      vm.observerInit = entries[0].isIntersecting;
      console.log("observer " + entries[0].isIntersecting);
      setTimeout(() => {
        if (entries[0].isIntersecting) {
          let allSvg = cash(vm.$refs.header_svg).find("svg");

          svgAnimate(allSvg);
        }
      }, 500);

      console.log(observer);
      console.log("callback");
    }
    function svgAnimate(allSvg) {
      // let allSvg = cash(vm.$refs.header).find("svg");
      Object.values(allSvg).forEach((e, i) => {
        if (typeof e == "object") {
          setTimeout(() => {
            let s = Snap(`#${cash(e).attr("id")}`);
            let linePath =
              "M801.232 1.08801C828.135 85.6037 826.119 305.992 573.247 306.243C257.157 306.557 290.875 391.985 264.032 558.848C237.188 725.711 110.431 771.421 1.31311 818.891";
            let lineLength = Snap.path.getTotalLength(linePath);
            let lineDraw = s.path(linePath);
            // let shadow = s.filter(Snap.filter.shadow(0, 2, 3));
            var f = s.filter(Snap.filter.blur(0.1, 1.2));
            lineDraw.attr({
              fill: "none",
              filter: f,
              stroke: "#EDC85C",
              "stroke-dasharray": lineLength + " " + lineLength,
              "stroke-dashoffset": lineLength,
              "stroke-width": 0.2,
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-miterlimit": 10,
            });
            lineDraw.animate(
              {
                strokeDashoffset: 0,
              },
              3000,
              mina.easein
            );
            let i = 0;
              if (i == 0) {
                i = 1;
                lineDraw.animate(
                  {
                    d: "M 801.232 1.088 C 828.135 85.6037 589 71 471 142 C 257.157 306.557 401 516 187 681 C 119 748 110.431 771.421 1.3131 818.891",
                  },
                  2500
                );
              } else {
                i = 0;
                lineDraw.animate(
                  {
                    d: "M801.232 1.08801C828.135 85.6037 826.119 305.992 573.247 306.243C257.157 306.557 290.875 391.985 264.032 558.848C237.188 725.711 110.431 771.421 1.31311 818.891",
                  },
                  2500
                );
              }
          }, 30 * i);
        }
      });
      //

      // console.log(lineLength);
    }
    if (!this.$device.isMobile) {
      this.observer = new IntersectionObserver(callback);
      this.observer.observe(this.$refs.header);
    }
  }

  async mounted() {
    // console.log(this.$route);
    await this.$nextTick();
    this.init();
    window.$nuxt.$on("switchModal", (data) => {
      console.log("switchModal " + data);
      this.modalOpen = data;
    });

    window.$nuxt.$on("callMe", (data) => {
      this.openCallMe = data;
    });

    // let allSvg = cash(this.$refs.header).find("svg");

    // console.log(!this.$device.isMobile);

    this.bodyClasses = [];
  }
}
</script>


<style scoped>
.back_wraper {
    backdrop-filter: blur(5px);
}
.img-position {
  /* overflow: hidden; */

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("@/assets/imgs/background-hover.webp"),
    url("@/assets/imgs/image_5.png"),
    radial-gradient(closest-side, transparent 10%, #00000061 75%);
  background-blend-mode: multiply;
}
.img {
  position: absolute;
  margin-left: -10%;
  margin-right: -10%;
}
svg {
  position: absolute;
  overflow: hidden;
  /* rotate: -2deg; */
  width: 780px;
  height: 800px;
  right: 1px;
}
.img_bck {
  background: url("@/assets/imgs/d12cbf69172f03803703e7e4bc12823e.webp") -60% 46%/80%
      no-repeat,
    radial-gradient(closest-side, transparent 10%, #ffffff1b 55%);
   /* backdrop-filter: blur(9px); */

  background-blend-mode: multiply;
}
</style>