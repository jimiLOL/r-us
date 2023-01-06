<template>
  <div class="flex flex-col gap-4 px-4 my-20">
    <span
      :class="['text-2xl', 'text-bold', $device.isMobile ? 'text-center' : '']"
      >Полезная информация</span
    >
    <div class="w-full">
      <SlickSlider ref="forSlick" :settings="setting_slider">
        <div
          :class="[
            'flex',
            'flex-col',
            'gap-2',
            $device.isMobile ? '' : 'px-4',
            'hover:text-theme-1',
            'cursor-pointer',
            'hover:shadow-lg',
            'hover:shadow-theme-1',
          ]"
          v-for="(item, index) in posts"
          :key="index"
            @click="
              $router.push(`/${direction}/${item.category_en}?post=${item.title_en}`)
            "
        >
          <img
            :src="`https://drive.google.com/uc?export=view&id=${item.picterUrl}`"
            class="rounded-lg hover:shadow-lg hover:shadow-theme-1"
            :alt="item.h1"
          />
          <span class="text-bold text-lg">{{ item.title }}</span>
        </div>
      </SlickSlider>
    </div>
  </div>
</template>


<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import SlickSlider from "~/components/slickSlider.vue";
import shopApi from "~/api/shop";

@Component({
  components: { SlickSlider },
})
export default class InformationForHome extends Vue {
  @Prop({type: String, default: () => 'blog' }) direction;
 

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
  categories = [];
  posts = [
    { title: "Молитвенный дом", picterUrl: "1ppXEp4WBf4KKS6eecEcM03hzzGoA0ALM" },
    { title: "Молитвенный дом", picterUrl: "1ppXEp4WBf4KKS6eecEcM03hzzGoA0ALM" },
    { title: "Молитвенный дом", picterUrl: "1ppXEp4WBf4KKS6eecEcM03hzzGoA0ALM" },
    { title: "Молитвенный дом", picterUrl: "1ppXEp4WBf4KKS6eecEcM03hzzGoA0ALM" },
    { title: "Молитвенный дом", picterUrl: "1ppXEp4WBf4KKS6eecEcM03hzzGoA0ALM" },
    { title: "Молитвенный дом", picterUrl: "1ppXEp4WBf4KKS6eecEcM03hzzGoA0ALM" },
  ];
  async fetchData(data) {
    await shopApi
      .getCategory(data)
      .then((res) => {
        console.log(res);
        this.categories.length = 0;
        this.posts.length = 0;

        this.posts = res;
        res.forEach((ele) => {
          const filter = this.categories.filter(
            (x) => x.category_en === ele.category_en
          );
          if (!filter.length) {
            this.categories.push(ele);
          }
        });
        this.load = false;
      })
      .catch((err) => {
        this.load = false;
        Vue.notify({
          group: "app",
          type: "error",
          title: "Ошибка",
          text: "Ошибка при загрузке данных",
        });
      });
  }

  mounted() {
    if (this.$device.isMobile) {
      this.setting_slider.slidesToShow = 1;
    }
    const data = {
      direction: this.direction,
      category_en: "all",
      offset: 0,
      limit: 4,
    };
    this.fetchData(data);
  }
}
</script>