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

      <Pagination
        :category_en="post?.category_en || 'loading'"
        :category="post?.category || 'loading'"
        :title="post?.title || 'loading'"
        :post="post"
        :direction="post?.direction || 'blog'"
      />
      <div v-if="load" class="flex flex-col gap-2 animate-pulse mb-2">
        <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
        <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
        <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
        <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
        <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
      </div>
      <div v-html="post?.description" v-else></div>
      <TablePriceforpost :category="post.category" :items="post?.items" />
      <!-- <span class="text-bold text-2xl">Цены на ритуальные услуги под ключ</span> -->
      <!-- 
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
                  'rounded-lg',
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
                  'px-9',
                  'rounded-lg',
                  'text-theme-8',
                  'text-bold',
                  'bg-gradient-to-t',
                  'from-bt-2',
                  'to-bt-1',
                  'transform transition ease-in duration-1500',
                  'hover:bg-theme-10',
                  'hover:scale-95',
                  'hover:underline',
                  $device.isMobile ? 'w-full py-4 whitespace-nowrap' : 'py-2',
                ]"
                @click="openModal"
              >
                Рассчитать стоимость похорон
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
      </div> -->
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
      <!-- <div class="w-2/3">
        <InformationForHome :class="[$device.isMobile ? 'px-4' : 'px-2']" />
      </div> -->
    </div>
  </div>
</template>



<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CtaGeneral from "~/shared/ctaGeneral.vue";
import shopApi from "~/api/shop";
import HoverForPost from "~/components/hover_for_post/Main.vue";
import Pagination from "~/components/pagination/Main.vue";
import TablePriceforpost from "~/components/table_price_for_post/Main.vue";
import InformationForHome from "~/components/home/informationBlock.vue";
import helper from "~/utils/helper";
import {Getter} from "vuex-class";

@Component({
  components: {
    CtaGeneral,
    HoverForPost,
    Pagination,
    TablePriceforpost,
    InformationForHome,
  },
  head(this: any) {
    return {
      title: this.post?.title,
      meta: [
        {
          hid: "description_post",
          name: "description",
          content: this.post.meta.meta_description,
        },
        {
          hid: "keywords_post",
          name: "keywords",
          content: this.post.meta.meta_keywords,
        },
        {
          hid: "og:title_post",
          property: "og:title",
          content: this.post.meta.meta_title,
        },
        {
          hid: "og:description_post",
          property: "og:description",
          content: this.post.meta.meta_description,
        },
        {
          hid: "og:image_post",
          property: "og:image",
          content: this.post.meta.picterUrl,
        },
        {
          hid: "og:url_post",
          property: "og:url",
          content: this.post.meta.meta_url,
        },
        {
          hid: "twitter:title_post",
          name: "twitter:title",
          content: this.post.meta.meta_title,
        },
        {
          hid: "twitter:description_post",
          name: "twitter:description",
          content: this.post.meta.meta_description,
        },
        {
          hid: "twitter:image_post",
          name: "twitter:image",
          content: this.post.meta.picterUrl,
        },
        {
          hid: "twitter:card_post",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
    };
  },
})
export default class Post extends Vue {
  @Prop({ type: String, required: true }) postSlug: any;
  @Prop({ type: String, required: true }) direction: any;
  @Getter("city/CITY_G") CITY_G!: any;

  

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
  post = {
    title: "",
    direction: "services",
    category_en: "load",
    category: "Загрузка",
    body_sub: "",
    meta: {
      meta_description: "",
      meta_keywords: "",
    },
    picterUrl: "",
  };
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

  async fetchData(data: any) {
    await shopApi
      .getCategory(data)
      .then((res) => {
        console.log(res);
        this.categories.length = 0;

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
        this.load = false;
        Vue.notify({
          group: "app",
          type: "error",
          title: "Ошибка",
          text: "Ошибка при загрузке данных",
        });
      });
  }

  createJsonLd() {
    let date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");
    let formattedDate = year + "-" + month + "-" + day;

    const ele = document.createElement("script");
    ele.type = "application/ld+json";
    this.direction === "services"
      ? (ele.innerHTML = JSON.stringify({
          "@context": "http://schema.org",
          "@graph": [
            {
              "@context": "http://schema.org",
              "@type": "Product",
              name: this.post.title,
              description: this.post.meta.meta_description,
              image: this.post.picterUrl,
              url: window.location.href,
              brand: {
                "@type": "Thing",
                name: "Домклик",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "RUB",
                price: 2331,
                itemCondition: "http://schema.org/NewCondition",
                availability: "http://schema.org/InStock",
                url: window.location.href,
              },
            },
          ],
        }))
      : (ele.innerHTML = JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Article",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://example.com/article",
          },
          headline: this.post.title,
          image: this.post.picterUrl,
          datePublished: "2023-01-02",
          dateModified: formattedDate,
          author: {
            "@type": "Person",
            name: "Автор статьи",
          },
          publisher: {
            "@type": "Organization",
            name: "Ритуальные услуги - Зауральский похоронный дом",
            logo: {
              "@type": "ImageObject",
              url: "https://example.com/logo.png",
              width: 600,
              height: 60,
            },
          },
          description: this.post.meta.meta_description,
          articleBody: this.post.body_sub,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: `${helper.getRandomInt(2, 5)}`,
            ratingCount: `${helper.getRandomInt(2, 100)}`,
          },
        }));

        const script = document.createElement("script");
        script.type = "application/ld+json";

    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": window.location.hostname,
            name: `Похороны в ${this.CITY_G.name}`,
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": window.location.hostname + "/blog/",
            name: "☑️ Полезные статьи",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@id": window.location.href,
            name: `⭐ ${this.post.title}`,
          },
        },
      ],
    });

    cash("body").append(script);
    cash("body").append(ele);
  }

  mounted() {
    const data = {
      direction: this.direction,
      category_en: "all",
      offset: 0,
    };
    this.fetchData(data);
    this.createJsonLd();
    this.fetchPost();
  }
}
</script>
 

<style scoped>
.img_cover {
  background: var(--url) 50% 100% / cover no-repeat;
  /* background-image: var(--url); */
  backdrop-filter: blur(7px);
  overflow: hidden;
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