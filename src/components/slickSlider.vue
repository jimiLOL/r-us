<template>
  <!-- <div ref='slider' class="slick-slider mx-0" :data-slick-options="settings">
  </div> -->
  <VueSlickCarousel ref="slider" class="slick-slider mx-0" v-bind="settings">
    <slot />
  </VueSlickCarousel>
</template>





<script>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

@Component({
  components: { VueSlickCarousel },
})
export default class SlickSlider extends Vue {
  @Prop({ type: Object, default: () => {} }) settings;
  @Watch('settings.goTo')
  goto(){
    this.$refs.slider.goTo(this.settings.goTo)


  }


  mounted() {

    //  this.$ref.slider.setAttribute('data-slick-options', settings)
  }
}
</script>
