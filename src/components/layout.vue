<template>
  <div class="font-raleway bg-theme-8 text-white">
    <div class="site__container">
      <div :class="[!$device.isMobile?'img-position h-screen':'']">
        <header :class="[$device.isMobile?'px-2':'px-6']">
          <Header :enable="true" />
        </header>
      </div>

      <main id="content" :class="['site__body', 'xl:py-4', $device.isMobile?'px-2':'px-6']">
        <slot />
      </main>

      <footer :class="['site__footer', 'xl:pt-14', $device.isMobile?'px-2':'px-6']">
        <Footer />
      </footer>
    </div>

    <!-- <Backtotop /> -->
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Layout extends Vue {
  // head() {
  //   return {
  //     bodyAttrs: {
  //       class: this.bodyClasses,
  //     },
  //   };
  // }

  bodyClasses = ["disable-transitions"];
 

  async mounted() {

    await this.$nextTick();

    this.bodyClasses = [];
  }
}
</script>


<style scoped>
.img-position {
  
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("@/assets/imgs/background-hover.png"), url("@/assets/imgs/image_5.png"), radial-gradient(closest-side, transparent 10%, #00000061 75%);;
   background-blend-mode: multiply;
}
.img {
  position: absolute;
  margin-left: -10%;
  margin-right: -10%;
}
</style>