<template>
    <div class="flex flex-col gap-4 px-4 my-20">
        <span :class="['text-2xl', 'text-bold', $device.isMobile ? 'text-center':'']">Полезная информация</span>
        <div class="w-full">
            <SlickSlider ref="forSlick" :settings="setting_slider">

            <div :class="['flex', 'flex-col', 'gap-2', $device.isMobile ?'':'px-4', 'hover:text-theme-1', 'cursor-pointer', 'hover:shadow-lg', 'hover:shadow-theme-1']"
            v-for="(item, index) in dataImgSlider"
            :key="index"
            >
                <img :src="require(`~/assets/imgs/${item.img}`)" class="rounded-lg hover:shadow-lg hover:shadow-theme-1" alt="">
                <span class="text-bold text-lg">{{item.title}}</span>
                
            </div>
            
            </SlickSlider>
            
        </div>
        
    </div>
</template>


<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import SlickSlider from "~/components/slickSlider.vue";


@Component({
    components: {SlickSlider}
})
export default class InformationForHome extends Vue {
  dataImgSlider = [
    { title: "Молитвенный дом", img: "cc5cdec7d436aff2ddf4298b0f1163dc.jpg" },
    { title: "Молитвенный дом", img: "cc5cdec7d436aff2ddf4298b0f1163dc.jpg" },
    { title: "Молитвенный дом", img: "cc5cdec7d436aff2ddf4298b0f1163dc.jpg" },
       { title: "Молитвенный дом", img: "cc5cdec7d436aff2ddf4298b0f1163dc.jpg" },
    { title: "Молитвенный дом", img: "cc5cdec7d436aff2ddf4298b0f1163dc.jpg" },
    { title: "Молитвенный дом", img: "cc5cdec7d436aff2ddf4298b0f1163dc.jpg" }
  ];

  setting_slider = {
    slidesToShow: 3,
    infinite: true,
    autoplay: false,
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
  };
  mounted() {
    if (this.$device.isMobile) {
        this.setting_slider.slidesToShow = 1;
    }
    
  }
}
</script>