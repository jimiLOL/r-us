<template>
  <main class="font-raleway bg-theme-8 text-white">
    <div class="site__container">
      <div
        :class="[
          !$device.isMobile && hoverEnable ? 'img-position h-screen' : '',
        ]"
      >
        <header :class="[$device.isMobile ? 'px-2' : 'px-6']">
          <div ref="header">
            <svg
              v-for="(item, index) in 40"
              :key="index"
              :id="`svg_${index}`"
              :style="`top: ${155 + index * 10}px; height: ${700 - index*10}px;`"
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
        :class="['site__body', 'xl:py-4', $device.isMobile ? 'px-2' : 'px-6']"
      >
        <slot />
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
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
@Component({})
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

  bodyClasses = ["disable-transitions"];

  async mounted() {
    // console.log(this.$route);
    await this.$nextTick();
    setTimeout(() => {
      svgAnimate();

    }, 500);

    let allSvg = cash(this.$refs.header).find("svg");


    function svgAnimate() {
      // let allSvg = cash(vm.$refs.header).find("svg");
      Object.values(allSvg).forEach((e,i) => {
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
            setInterval(() => {
              if (i == 0) {
                i = 1;
                lineDraw.animate({ d: "M 801.232 1.088 C 828.135 85.6037 589 71 471 142 C 257.157 306.557 504 546 349 661 C 237.188 725.711 110.431 771.421 1.3131 818.891" }, 2500);
              } else {
                i = 0;
                lineDraw.animate({ d: "M801.232 1.08801C828.135 85.6037 826.119 305.992 573.247 306.243C257.157 306.557 290.875 391.985 264.032 558.848C237.188 725.711 110.431 771.421 1.31311 818.891" }, 2500);


              }
              
            }, 4000);
          }, 30*i);
        }
      });
      //

      // console.log(lineLength);
    }

    this.bodyClasses = [];
  }
}
</script>


<style scoped>
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
</style>