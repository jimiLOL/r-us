<template>
  <div :class="[$device.isMobile ? '' : 'w-3/10 pt-20', 'basis-3/10']">
    <nav>
      <ul class="text-bold text-center whitespace-nowrap">
        <TransitionGroup name="slide-in">
        <li
          v-for="item in categories"
          :key="item._id"
          class="py-4 cursor-pointer hover:underline"
          @click="$router.push(`services/${item.category_en}`)"
        >
          {{ item.category }}
        </li>
        </TransitionGroup>
      </ul>
    </nav>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import shopApi from "~/api/shop";

interface data {
  direction: string;
  offset: number;
  category_en: string;
  limit?: number;
}

@Component({
  components: {},
})
export default class MenuForPost extends Vue {
  @Prop({ type: String, required: true }) category_en!: string;
  @Prop({ type: String, default: 'services' }) direction!: string;
  date = new Date().getFullYear();
  categories = [
    {
      description: "",
      direction: "services",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "services",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "services",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "services",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "services",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "services",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "services",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
  ];
  async fetchData(data: data) {
    await shopApi
      .getCategory(data)
      .then((res) => {
        console.log(res);
        this.categories.length = 0;
        // this.posts.length = 0;

        // this.posts = res;
        res.forEach((ele: any) => {
          const filter = this.categories.filter(
            (x) => x.category_en === ele.category_en
          );
          if (!filter.length) {
            this.categories.push(ele);
          }
        });
      })
      .catch((err) => {
        Vue.notify({
          group: "app",
          type: "error",
          title: "Ошибка",
          text: "Ошибка при загрузке данных",
        });
      });
  }
  mounted() {
    const data: data = {
      direction: this.direction,
      category_en: this.category_en,
      offset: 0,
    };
    this.fetchData(data);
  }
}
</script>

<style lang="scss">
.slide-in {
  &-move {
    transition: opacity 0.5s linear, transform 0.5s ease-in-out;
  }

  &-leave-active {
    transition: opacity 0.4s linear,
      transform 0.4s cubic-bezier(0.5, 0, 0.7, 0.4); //cubic-bezier(.7,0,.7,1);
    transition-delay: calc(0.1s * (var(--total) - var(--i)));
  }

  &-enter-active {
    transition: opacity 0.5s linear,
      transform 0.5s cubic-bezier(0.2, 0.5, 0.1, 0.5);
    transition-delay: calc(0.1s * var(--i));
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter {
    transform: translateX(-1em);
  }
  &-leave-to {
    transform: translateX(1em);
  }
}
</style>