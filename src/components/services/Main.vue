<template>
  <div
    :class="[
      'flex',
      $device.isMobile ? 'flex-col mb-6' : 'flex-row',
      'justify-center',
      'gap-6',
      'px-4',
      'h-max',
    ]"
  >
    <div v-if="!$device.isMobile">
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
    </div>

    <TransitionGroup
      name="slide-in"
      tag="div"
      class="flex flex-col gap-4 w-full"
      :class="[$device.isMobile ? 'pt-0' : 'pt-20']"
    >
      <div
        v-for="post in posts"
        :key="post._id"
        :class="[
          'flex',
          $device.isMobile ? 'flex-col max-h-96' : 'flex-row h-64 max-h-48',
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
        @click="r(post)"
      >
        <img
          :class="[$device.isMobile ? 'w-16 object-cover self-center' : 'w-48 object-cover object-top', 'rounded-md']"
          :src="require('@/assets/imgs/logo.png')"
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
          @click="r(post)"
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
import declineNoun from "~/utils/decline";
import { Getter } from "vuex-class";

@Component({})
export default class Services extends Vue {
  @Getter("city/CITY_G") CITY_G;

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
  r(post) {
    console.log(post);
    if (post.hasOwnProperty("link_post")) {
      this.$router.push(post.link_post);
    } else {
      this.$router.push(`/services/${post.category_en}?post=${post.title_en}`);
    }
  }
  obj = [
    {
      _id: "63bdb97982b3287b128f461d2",
      link_post: "/zahoronenie",
      title: "Организация похорон",
      title_en: "organizatsiya_pominalnikh_obedov_v_kurgane",
      category: "Организация похорон",
      category_en: "organizaciya_pohoron",
      description:
        "Смерть любимого человека может стать огромным потрясением, что затрудняет планирование похорон. Чтобы помочь и облегчить бремя родственников умершего, ритуал-профи специализируется на предоставлении полного комплекса услуг по организации похоронной церемонии.",
      h1: `Организация похорон`,
      direction: "services",
      picterUrl: "1eAtQgJ0CnRwYpG1JYbmE4UN-FFyZ3Ihr",
    },
    {
      _id: "63bdb9798112b3287b128f46d2",
      link_post: "/pravoslavnie-pokhoroni",
      title:
        "Организация православных похорон",
      title_en: "organizatsiya_pominalnikh_obedov_v_kurgane",
      category: "Организация похорон",
      category_en: "organizaciya_pohoron",
      description:
        "Когда усопший был верующим, важно устроить православные похороны с учетом его прижизненных ценностей и соблюдением всех обрядов. Наша ритуальная служба имеет огромный опыт и помогает провести православные  похороны..",
      h1: `Организация православных похорон`,
      direction: "services",
      picterUrl: "1ffL4mMoXz6vhodRsGwyszC9_uUN-Jj7c",
    },
     {
      _id: "63bdb2798112b3287b128f46d2",
      link_post: "/gruz_200",
      title:
        "Груз 200 (оцинковка, отправка) доставка",
      title_en: "organizatsiya_pominalnikh_obedov_v_kurgane",
      category: "Организация похорон",
      category_en: "organizaciya_pohoron",
      description:
        "Мы гарантируем надежную и безопасную экспедицию останков, а также оказываем услуги по эксклюзивной оцинковке умерших, которая позволяет продлить срок хранения тела до 14 дней. У нас работают квалифицированные специалисты, которые готовы оказать помощь по оформлению всех необходимых документов для отправки тела...",
      h1: `Груз 200 (оцинковка, отправка) доставка`,
      direction: "services",
      picterUrl: "1iOf0uHJ3oB82YnCONTyqNirzgYXpc-Dn",
    },
      {
      _id: "63bdb279811203287b128f46d2",
      link_post: "/pokhorony-umershego-ot-covid-19",
      title:
        "Похороны умершего от Covid-19",
      title_en: "organizatsiya_pominalnikh_obedov_v_kurgane",
      category: "Организация похорон",
      category_en: "organizaciya_pohoron",
      description:
        "Ознакомьтесь с правилами проведения похорон в условиях пандемии и прочитайте полезные рекомендации нашей компании, специализирующейся на ритуальных услугах...",
      h1: `Похороны умершего от Covid-19`,
      direction: "services",
      picterUrl: "1-1coEP8zJIht_g1WnKjk_9iZ-tMVvKnM",
    },
       {
      _id: "63bdb2798168203287b128f46d2",
      link_post: "/econom-pokhoroni",
      title:
        "Эконом похороны",
      title_en: "organizatsiya_pominalnikh_obedov_v_kurgane",
      category: "Организация похорон",
      category_en: "organizaciya_pohoron",
      description:
        "Мы расскажем о доступных вариантах организации церемонии, которые позволят значительно сэкономить на расходах...",
      h1: `Эконом похороны`,
      direction: "services",
      picterUrl: "1uv3D-bhiX76qGRsRno-ZUSCUf-6ARyzY",
    },
     {
      _id: "63bdb27981168203287b128f46d2",
      link_post: "/ritualnyj-transport",
      title:
        "Аренда ритуального транспорта",
      title_en: "organizatsiya_pominalnikh_obedov_v_kurgane",
      category: "Организация похорон",
      category_en: "organizaciya_pohoron",
      description:
        "Мы расскажем о доступных вариантах организации церемонии, которые позволят значительно сэкономить на расходах...",
      h1: `Аренда ритуального транспорта`,
      direction: "services",
      picterUrl: "1JAc5CMLca2QZ7Ry-SITJZiiLuorXsjY",
    },
  ];

  async fetchData(data) {
    await shopApi
      .getCategory(data)
      .then((res) => {
        console.log(res);
        this.categories.length = 0;
        this.posts.length = 0;

        this.posts = res;
        this.obj.forEach((e) => {
          this.posts.push(e);
        });
        console.log(this.posts);

        this.posts.forEach((ele) => {
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
    this.$store.dispatch("city/ACTION_GET_DOMAIN", window?.location?.host);

    // console.log(this.$route);
    const data = {
      direction: "services",
      category_en: this.category_en,
      offset: 0,
    };
    setTimeout(() => {
      this.load = true;

      this.fetchData(data);
    }, 500);
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