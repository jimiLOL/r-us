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
    <div
      v-if="!load"
      :class="[$device.isMobile ? '' : 'w-48 pt-20', 'basis-3/10']"
    >
      <nav>
        <ul class="text-bold text-center whitespace-nowrap">
          <li
            v-for="item in categories"
            :key="item._id"
            class="py-4 cursor-pointer hover"
          >
            <nuxt-link :to="`/${direction}/${item.category_en}`">
              {{ item.category }}
            </nuxt-link>
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
    <div class="flex flex-col gap-4 pt-20 w-full">
    <HoverForPost :post="post" :load="load" />

      <!-- <div class="flex img_cover h-96 rounded-lg">
        <h1
          style="color: #fff"
          :class="[
            load
              ? 'animate-pulse h-2.5 bg-gray-500 rounded-full w-98'
              : 'text-wraper text-bold text-3xl self-end text-white p-4 bg-clip-text bg-gradient-to-r from-theme-1 to-theme-8',
          ]"
        >
          {{ load ? "" : post?.title }}
        </h1>
      </div> -->
        <!-- <component :is="'style'">
          :root { --url: url("https://drive.google.com/uc?export=view&id={{
            post?.picterUrl || "1SRUqTLDdfMfFOWdes-EFCtsPZbEsG7TU"
          }}")}
        </component> -->
      <!-- <div class="flex gap-3 text-normal text-black font-bold">
      
        <NuxtLink to="/" class="hover:underline">Главная</NuxtLink>
        <ChevronRightIcon />
        <NuxtLink :to="`/${direction}`" class="hover:underline">{{post?.direction == 'blog'?'Блог': 'Услуги'}}</NuxtLink>
        <ChevronRightIcon />
        <NuxtLink :to="`/${direction}/${post?.category_en}`" class="hover:underline">{{
          post?.category
        }}</NuxtLink>
        <ChevronRightIcon />
        <NuxtLink
          :to="{
            path: `/${direction}/${post?.category_en}`,
            query: { post: post?.title_en },
          }"
          class="text-theme-17 truncate"
          >{{ post?.title }}</NuxtLink
        >
      </div> -->
      <Pagination
        :category_en="post?.category_en"
        :category="post?.category"
        :title="post?.title"
            :post="post"
        :direction="post?.direction"
      />
      <div v-if="load" class="flex flex-col gap-2 animate-pulse mb-2">
        <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
        <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
        <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
        <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
        <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
      </div>
      <div v-else>
        <p>{{ load ? "" : post?.description }}</p>
      </div>
      <span class="text-bold text-2xl">Цены на ритуальные услуги под ключ</span>

      <div
        :class="[
          'flex',
          $device.isMobile ? 'flex-col text-center' : 'flex-row',
          'gap-2',
          'border-2',
          'rounded-lg',
          'border-theme-10',
          'border-solid',
          'p-4',
          $device.isMobile
            ? 'img-hover-zoom--mobile'
            : 'img-hover-zoom--desktop',
          'text-white',
        ]"
      >
        <div :class="['flex', 'flex-col', 'gap-2', 'w-full']">
          <span class="text-bold text-3xl text-theme-10 text-shadow">{{
            post?.category
          }}</span>
          <ul
            :class="[
              'leading-snug',
              'flex',
              'flex-col',
              'items-start'
            ]"
          >
            <li class="inline-flex gap-2">
              <font-awesome-icon
                icon="circle-dot"
                transform="shrink-6"
                class="self-center hover:animate-ping w-4 shrank-0"
                :style="{ color: '#FFBB30' }"
              />Омовение
            </li>
            <li class="inline-flex gap-2">
              <font-awesome-icon
                icon="circle-dot"
                transform="shrink-6"
                class="self-center hover:animate-ping w-4 shrank-0"
                :style="{ color: '#FFBB30' }"
              />Транспортировка тела
            </li>
            <li class="inline-flex gap-2">
              <font-awesome-icon
                icon="circle-dot"
                transform="shrink-6"
                class="self-center hover:animate-ping w-4 shrank-0"
                :style="{ color: '#FFBB30' }"
              />Ваза
            </li>
          </ul>
          <div
            :class="[
              'flex',
              $device.isMobile ? 'flex-col' : 'flex-row self-center gap-4',
            ]"
          >
            <div
              class="
                inline-flex
                flex-col
                justify-center
                flex-nowrap
                text-base
                xl:whitespace-nowrap
              "
            >
              <span
                >Горячая линия -
                <strong class="text-theme-10 text-shadow"
                  >Круглосуточно</strong
                ></span
              >
              <a href="tel:+73522610630" class="font-bold">+7 (3522) 610‒630</a>
            </div>
            <div
              :class="[
                'flex',
                $device.isMobile ? 'flex-col mt-4' : '', 'gap-2'
              ]"
            >
              <button
                :class="[
                  'px-9',
                  'rounded-sm',
                  'text-theme-8',
                  'text-bold',
                  'bg-gradient-to-t',
                  'from-bt-2',
                  'to-bt-1',
                  'transform transition ease-in duration-1500',
                  'hover:bg-theme-10',
                  'hover:transform',
                  'hover:scale-95',
                  'hover:underline',
                  'focus:bg-theme-10',
                  'focus:scale-95',
                  'focus:underline',
                  $device.isMobile ? 'w-full py-4' : 'py-2',
                ]"
                @click="callMe"
              >
                Заказать звонок
              </button>
              <button
                :class="[
                  'py-2',
                  'px-9',
                  'rounded-sm',
                  'text-theme-8',
                  'text-bold',
                  'bg-gradient-to-t',
                  'from-bt-2',
                  'to-bt-1',
                  'transform transition ease-in duration-1500',
                  'hover:bg-theme-10',
                  'hover:scale-95',
                  'hover:underline',
                  $device.isMobile ? 'w-full' : '',
                ]"
                @click="openModal"
              >
                Расчитать стоимость похорон
              </button>
            </div>
          </div>
        </div>
        <span
          class="
            text-bold text-xl text-theme-10
            justify-self-end
            self-start
            whitespace-nowrap
          "
          :class="[$device.isMobile ? 'self-center' : 'text-bold text-3xl text-theme-10 text-shadow',]"
          >от 10 000 ₽</span
        >
      </div>
      <div v-if="!load" v-html="post?.body_sub"></div>
      <CtaGeneral />
      <div v-if="!load" v-html="post?.body_main"></div>
      <div v-else class="flex flex-col gap-2">
        <div
          v-for="index in 20"
          :key="index"
          class="h-2 bg-gray-500 rounded-full dark:bg-gray-700 animate-pulse"
        ></div>
      </div>

      <CtaGeneral />
    </div>
  </div>
</template>



<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import CtaGeneral from "~/shared/ctaGeneral.vue";
import shopApi from "~/api/shop";
import HoverForPost from "~/components/hover_for_post/Main.vue";
import Pagination from "~/components/pagination/Main.vue";

@Component({
  components: { CtaGeneral, HoverForPost, Pagination },
  //  head(this) {
  //   return {
  //     title: 'asdasd',
  //     meta: [
  //       {
  //         hid: "description_post",
  //         name: "description",
  //         content: `Как приобрести захоронение на кладбище в ритуальном агентстве zpd45.ru? Служба похоронных услуг Кургане - самая старая и надежная. Гарантируем высокое качество и безотказную работу.`,
  //       },
  //     ],
  //   };
  // },
})
export default class Post extends Vue {
  @Prop({ type: String, required: true }) postSlug;
  @Prop({ type: String, required: true }) direction;

  head() {
    return {
      title: this.post?.title,
    };
  }

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
  post = null;
  load = true;

  // navigation() {
  //   // $router.push(`${$route.path}/${item.category_en}`)
  //   if ()
  // }
  openModal() {
    window.$nuxt.$emit("switchModal", true);
  }
  callMe() {
    window.$nuxt.$emit("callMe", true);
  }

  async fetchPost() {
    this.load = true;
    await shopApi
      .getPost({ title_en: this.postSlug })
      .then((res) => {
        this.post = res.post;
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

  async fetchData(data) {
    await shopApi
      .getCategory(data)
      .then((res) => {
        console.log(res);
        this.categories.length = 0;

        res.forEach((ele) => {
          const filter = this.categories.filter(
            (x) => x.category_en === ele.category_en
          );
          if (!filter.length) {
            this.categories.push(ele);
          }
        });
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
    const data = {
      direction: this.direction,
      category_en: "all",
      offset: 0,
    };
    this.fetchData(data);
    this.fetchPost();
  }
}
</script>


<style scoped>
.img_cover {
  background: var(--url) 50% 100% / cover no-repeat;
  /* background-image: var(--url); */
  backdrop-filter: blur(7px); 
  overflow: hidden
}
.img_cover::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
  transition: opacity 0.3s ease-in-out;
}
.text-wraper {
  /* text-shadow: 0 0 0.6px #000000, 0 0 0.5px #d1dc0d; */
  text-shadow: #fc0 0.1px 0 0.1px;
}
h1 {
  filter: none;
}
.img-hover-zoom--desktop {
  background-size: cover;
  background: url("/imgs/lp02bi_94766ea5f97792e4672f66037d2c8269841b788f.jpg")
      20% 38%/100% no-repeat,
    radial-gradient(closest-side, transparent 10%, #00000061 75%);
  background-blend-mode: multiply;
}

.img-hover-zoom--mobile {
  background-size: cover;
  background: url("/imgs/lp02bi_94766ea5f97792e4672f66037d2c8269841b788f.jpg")
      20% 38%/200% no-repeat,
    radial-gradient(closest-side, transparent 10%, #00000061 75%);
  background-blend-mode: multiply;
}
</style>