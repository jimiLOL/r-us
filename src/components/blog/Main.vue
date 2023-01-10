<template>
  <div
    :class="[
      'flex',
      $device.isMobile ? 'flex-col mb-6' : 'flex-row',
      'justify-center',
      'gap-6',
      'px-4',
    ]"
  >
    <div :class="[$device.isMobile ? '' : 'w-3/10 pt-20', 'basis-3/10']">
      <nav>
        <ul class="text-bold text-center whitespace-nowrap">
          <li
            v-for="item in categories"
            :key="item._id"
            class="py-4 cursor-pointer hover:underline"
            @click="$router.push(`${$route.path}/${item.category_en}`)"
          >
            {{ item.category }}
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex flex-col">
      <TransitionGroup
        name="slide-in"
        tag="div"
        class="flex flex-col gap-4 pt-20 w-full"
      >
        <div
          v-for="post in posts"
          :key="post._id"
          :class="[
            'flex',
            $device.isMobile ? 'flex-col h-full' : 'flex-row max-h-36',
            'w-full',
            'gap-4',
            'overflow-hidden',
            'border-2',
            'rounded-lg',
            'border-theme-11',
            'border-solid',
          ]"
        >
          <img
            :class="[$device.isMobile ? 'w-full' : 'w-1/3', 'rounded-md']"
             :src="`https://drive.google.com/uc?export=view&id=${post.picterUrl}`"
          :alt="`${post.title}`"
          />
          <div
            :class="[
              'flex',
              'flex-col',
              'w-full',
              $device.isMobile ? 'text-center' : '',
            ]"
          >
            <h3 class="text-bold text-2xl">{{ post?.h1 }}</h3>
            <p :class="[$device.isMobile ? 'truncate' : '']">
              {{ kitcut(post?.description, 100) }}
            </p>
          </div>
          <button
            :class="[
              'rounded-lg',
              'border-2',
              'border-social-3',
              $device.isMobile ? 'w-5/6 mx-4 self-center' : 'w-1/3 mr-2',
              'self-end',
              'py-4',
              'px-1',
              'my-4',
              'hover:text-black',
              'hover:bg-theme-11',
              'hover:border-black',
              'focus:text-black',
              'focus:bg-theme-11',
              'focus:border-black',
            ]"
            :disabled="load"
            @click="
              $router.push(`/blog/${post.category_en}?post=${post.title_en}`)
            "
          >
            Читать
          </button>
        </div>
      </TransitionGroup>
      <div class="w-full items-center">
        <Pagination
          :top="2"
          :margin="4"
          :bottom="11"
          :current="1"
          :siblings="2"
          :total="10"
          @page-change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>


<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import shopApi from "~/api/shop";

@Component({
  components: {},
})
export default class Blog extends Vue {
  @Prop({ type: String, required: true }) category_en;
  load = false;
  categories = [
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
  ];
  posts = [
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
    {
      description: "",
      direction: "blog",
      h1: "",
      title_en: "",
      category: "",
      category_en: "",
    },
  ];
  handlePageChange(page) {
    console.log(page);
    // this.$store.dispatch("shop/setOptionValue", {
    //   option: "page",
    //   value: page,
    // });
  }

  kitcut(text, limit) {
    text = text.trim();
    if (text.length <= limit) return text;

    text = text.slice(0, limit);

    return text.trim() + "...";
  }

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
  async mounted() {
    console.log(this.$route);
    this.load = true;
    const data = {
      direction: "blog",
      category_en: this.category_en,
      offset: 0,
    };
    this.fetchData(data);
  }
}
</script>



<style lang="scss" scoped>
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