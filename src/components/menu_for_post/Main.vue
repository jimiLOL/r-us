<template>
  <div :class="[$device.isMobile ? '' : 'w-3/10 pt-20', 'basis-3/10']">
    <nav>
      <ul class="text-bold text-center whitespace-nowrap">
        <li
          v-for="item in categories"
          :key="item._id"
          class="py-4 cursor-pointer hover:underline"
          @click="$router.push(`services/${item.category_en}`)"
        >
          {{ item.category }}
        </li>
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
      direction: "services",
      category_en: this.category_en,
      offset: 0,
    };
    this.fetchData(data);
  }
}
</script>