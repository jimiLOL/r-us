<template>
  <div
    :class="[
      'flex',
      $device.isMobile ? 'flex-col mb-6' : 'flex-row',
      'justify-center',
      'gap-6',
      'px-4',
      'h-screen',
    ]"
  >
    <div
      v-if="!load && !Object.keys($route.params).length"
      :class="[$device.isMobile ? '' : 'w-3/10 pt-20', 'basis-3/10 w-48']"
    >
      <nav>
        <ul class="font-bold text-center whitespace-nowrap">
          <li
            v-for="item in categories"
            :key="item._id"
            class="py-4 cursor-pointer hover"
            @click="$router.push(`${$route.path}/${item.category_en}`)"
          >
            {{ item.category }}
          </li>
        </ul>
      </nav>
    </div>
    <div
      v-else-if="load"
      :class="[
        $device.isMobile ? '' : 'w-3/10 pt-20',
        'basis-3/10',
        'animate-pulse',
      ]"
    >
      <div
        class="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-48 mb-4"
      ></div>
      <div
        class="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-48 mb-4"
      ></div>
      <div
        class="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-48 mb-4"
      ></div>
      <div
        class="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-48 mb-4"
      ></div>
    </div>
    <div v-else class="mt-4 mx-4">
      <nuxt-link to="/services" class="inline-flex gap-1 hover:underline"
        ><ChevronsLeftIcon aria-hidden="true" />Назад</nuxt-link
      >
    </div>

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
          $device.isMobile ? 'flex-col max-h-96' : 'flex-row max-h-36',
          'w-full',
          'gap-4',
          'overflow-hidden',
          'border-2',
          'rounded-lg',
          'border-theme-11',
          'bg-theme-15',
          'shadow-sm shadow-black shadow-opacity-50 shadow-offset-2 shadow-radius-2 shadow-inset hover:shadow-lg',
          'border-solid',
          load ? 'animate-pulse' : '',
          'an_hov',
        ]"
        :disabled="load"
        @click="
          $router.push(`/services/${post.category_en}?post=${post.title_en}`)
        "
      >
        <img
          :class="[$device.isMobile ? 'w-full' : 'w-48', 'rounded-md']"
          :src="`https://drive.google.com/uc?export=view&id=${post.picterUrl}`"
          :alt="`Услуги ${post.title}`"
        />
        <div
          :class="[
            'flex',
            'flex-col',
            'w-full',
            'cursor-pointer',
              'gap-2 py-2',
            $device.isMobile ? 'text-center px-2' : '',
            load ? 'animate-pulse' : '',
          ]"
        >
          <h3
            :class="[
              load
                ? 'h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-48 mt-2'
                : 'font-bold text-2xl hover:underline',
            ]"
          >
            {{ load ? "" : post.h1 }}
          </h3>
          <p
          v-if="!$device.isMobile"
            :class="[
              load
                ? 'h-2 w-96 mt-4 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5'
                : '',
              $device.isMobile ? 'truncate' : '',
            ]"
          >
            {{ load ? "" : kitcut(post.description, 150) }}
          </p>
        </div>
        <button
          v-if="!$device.isMobile"
          :class="[
            'rounded-lg',
            $device.isMobile ? 'w-5/6 mx-4 self-center' : 'w-1/3 mr-2',
            'self-end',
            'py-4',
            'px-1',
            'my-4',
            'bg-gradient-to-t',
            'from-bt-2',
            'to-bt-1',
            'cursor-pointer transform transition ease-in duration-1500 hover:scale-95',
            'text-white hover:underline',
            load ? 'animate-pulse bg-gray-500 w-96' : '',
          ]"
          :disabled="load"
          @click="
            $router.push(`/services/${post.category_en}?post=${post.title_en}`)
          "
        >
          {{ load ? "" : "Выбрать" }}
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>



<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import shopApi from "~/api/shop";

@Component({})
export default class Services extends Vue {
  @Prop({ type: String, required: true }) category_en;
  load = false;
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
  posts = [
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
      direction: "services",
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