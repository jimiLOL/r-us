<template>
  <div
    id="priceList"
    :class="[
      'flex',
      'flex-col text-black',
      $device.isMobile ? 'pt-20 px-2' : 'py-20 px-4',
    ]"
  >
    <h3
      :class="[
        $device.isMobile ? 'text-center text-2xl' : 'text-4xl',
        'text-bold',
      ]"
    >
      Цены на ритуальные услуги под ключ
    </h3>
    <div v-if="!$device.isMobile" class="flex gap-9 text-base mt-9">
      <div
        :class="[
          'hover:underline text-shadow_hover cursor-pointer',
          categoriesTab.chose == 'provaslavny' || categoriesTab.chose == 'provaslavny'
            ? 'pt-2 bg-white w-max px-4 rounded-t-lg border-l-2 border-t-2 border-r-2 border-theme-1 border-solid'
            : '',
        ]"
        @click="setNewChose('provaslavny')"
      >
        Православные
      </div>
      <div
        :class="[
          'hover:underline text-shadow_hover cursor-pointer',
          categoriesTab.chose == 'mysulman' || categoriesTab.chose == 'mysulman'
            ? 'pt-2 bg-white w-max px-4 rounded-t-lg border-l-2 border-t-2 border-r-2 border-theme-1 border-solid'
            : '',
        ]"
        @click="setNewChose('mysulman')"
      >
        Мусульманские
      </div>
      <div
        :class="[
          'hover:underline text-shadow_hover cursor-pointer',
          categoriesTab.chose == 'kremacia' || categoriesTab.chose == 'kremacia'
            ? 'pt-2 bg-white w-max px-4 rounded-t-lg border-l-2 border-t-2 border-r-2 border-theme-1 border-solid'
            : '',
        ]"
        @click="setNewChose('kremacia')"
      >
        Кремация
      </div>
    </div>
    <div v-else class="mt-9 mb-2 text-base bg-white px-4 rounded-t-lg">
      <SlickSlider ref="forSlick" :settings="setting_slider">
        <div class="focus:underline focus:text-theme-1 cursor-pointer">
          Православные
        </div>
        <div class="focus:underline focus:text-theme-1 cursor-pointer">
          Мусульманские
        </div>
        <div class="focus:underline focus:text-theme-1 cursor-pointer">
          Кремация
        </div>
      </SlickSlider>
    </div>
    <div
      :class="[
        'flex',
        'flex-col',
        'border-b-2',
        'border-r-2',
        'border-l-2',
        'rounded-b-lg',
        'rounded-tr-lg',
        'border-theme-1',
        'bg-white',
        'border-solid',
        'text-lg',
        'font-bold',
        $device.isMobile ? 'px-2' : 'px-9',
        'gap-2',
      ]"
    >
      <TransitionGroup name="slide-in" tag="div">
        <div
          v-for="(item, index) in data"
          :key="index"
          :class="[idVar == index ? 'flex flex-col' : '']"
          @click="insert(index)"
        >
          <div
            v-if="idVar == index || showAll"
            :class="[
              'flex',
              'justify-between',
              'py-6',
              idVar == index || index == 4
                ? ''
                : 'border-b-2 text-shadow_hover',
              'border-solid',
              'cursor-pointer',
            ]"
            @click="idVar === index ? closeList() : ''"
          >
            <span class="hover">{{ item.title }}</span>
            <span class="grow">от {{ item.price }} ₽</span>
          </div>

          <div v-if="idVar === index">
            <div
              v-for="(listItem, index) in item.list"
              :key="index"
              class="flex justify-between text-base font-normal py-2 gap-4"
            >
              <span class="inline-flex">
                <font-awesome-icon
                  icon="circle-dot"
                  transform="shrink-6"
                  class="self-center hover:animate-ping w-4 shrank-0"
                  :style="{ color: '#FFBB30' }"
                />
                {{ listItem.title }}</span
              >
              <span class="shrink-0 whitespace-nowrap"
                >{{ listItem.price }} ₽</span
              >
            </div>

            <div
              :class="[
                'flex',
                $device.isMobile ? 'flex-col items-center' : 'flex-row',
                'justify-between',
                'py-20',
              ]"
            >
              <button
                :class="[
                  $device.isMobile ? 'py-1 px-2 w-1/3' : 'py-2 px-9',
                  'border-2',
                  'rounded-md',
                  'border-theme-11',
                  'border-solid',
                  'hover:bg-theme-10',
                  'hover:transform',
                  'hover:scale-95',
                  'hover:underline',
                  'hover:text-black',
                  'max-h-12',
                ]"
                @click="closeList"
              >
                Закрыть
              </button>
              <div
                :class="[
                  'flex',
                  $device.isMobile
                    ? 'flex-col mt-14 items-center text-center'
                    : 'flex-row',
                  'content-center',
                  'gap-14',
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
                  <a href="tel:+73522610630" class="font-bold"
                    >+7 (3522) 610‒630</a
                  >
                </div>
                <button
                  v-if="showButtonOrder"
                  :class="[
                    'py-2',
                    'px-9',
                    'rounded-md',
                    'text-theme-8',
                    'text-bold',
                    'bg-gradient-to-t',
                    'from-bt-2',
                    'to-bt-1',
                    'hover:bg-theme-10',
                    'hover:transform',
                    'hover:scale-95',
                    'hover:underline',
                    'focus:bg-theme-10',
                    'focus:transform',
                    'focus:scale-95',
                    'focus:underline',
                    $device.isMobile ? 'w-full' : '',
                  ]"
                  @click="showListButton"
                >
                  Заказать комплекс
                </button>
                <div
                  v-else-if="!showButtonOrder && !openForm"
                  class="flex flex-col gap-2"
                >
                  <button
                    :class="[
                      'py-2',
                      'px-9',
                      'border-1',
                      'rounded-md',
                      'text-theme-8',
                      'text-bold',
                       'bg-gradient-to-t',
                      'from-social-wp',
                      'to-bt-1',
                      'border-solid',
                      'hover:bg-social-wp_contrast',
                      'hover:transform',
                      'hover:scale-95',
                      'hover:underline',
                      'focus:bg-social-wp_contrast',
                      'focus:transform',
                      'focus:scale-95',
                      'focus:underline',
                      $device.isMobile ? 'w-full' : '',
                    ]"
                  >
                    Whatsapp
                  </button>
                  <button
                    :class="[
                      'py-2',
                      'px-9',
                      'rounded-md',
                      'text-theme-8',
                      'text-bold',
                      'bg-gradient-to-t',
                      'from-social-tg',
                      'to-bt-1',
                      'hover:bg-social-tg_contrast',
                      'hover:transform',
                      'hover:scale-95',
                      'hover:underline',
                      'focus:bg-social-tg_contrast',
                      'focus:transform',
                      'focus:scale-95',
                      'focus:underline',
                      $device.isMobile ? 'w-full' : '',
                    ]"
                  >
                    Telegram
                  </button>
                  <button
                    :class="[
                      'py-2',
                      'px-9',
                      'rounded-md',
                      'text-theme-8',
                      'text-bold',
                      'bg-gradient-to-t',
                      'from-theme-1',
                      'to-bt-1',
                      'hover:bg-theme-10',
                      'hover:transform',
                      'hover:scale-95',
                      'hover:underline',
                      'focus:bg-theme-10',
                      'focus:transform',
                      'focus:scale-95',
                      'focus:underline',
                      $device.isMobile ? 'w-full' : '',
                    ]"
                    @click="switchFormCall"
                  >
                    Обратный звонок
                  </button>
                </div>
                <div
                  v-if="!showButtonOrder && openForm"
                  class="flex flex-col gap-4"
                >
                  <span>Заказать обратный звонок</span>
                  <div class="flex flex-col gap-2">
                    <input
                      class="px-4 py-2 rounded-md text-black border-2 border-solid border-theme-1"
                      type="text"
                      aria-required="true"
                      placeholder="Вашe имя"
                      v-model="userName"
                    />
                    <input
                      class="px-4 py-2 rounded-md text-black border-2 border-solid border-theme-1"
                      type="tel"
                      aria-required="true"
                      placeholder="+7(___)-___-__-__"
                      v-model="userPhone"
                    />
                  </div>
                  <span v-if="!validPhone" class="text-theme-7 phone_view"
                    >Проверьте правильность номера телефона</span
                  >
                  <div class="flex flex-col gap-1">
                    <button
                      :class="[
                        'disabled:opacity-75',

                        'py-2',
                        'px-9',
                        'border-1',
                        'rounded-md',
                        'text-theme-8',
                        'text-bold',
                        'bg-gradient-to-t',
                      'from-bt-2',
                      'to-bt-1',
                        'border-solid',
                        validPhone
                          ? 'hover:bg-theme-10 hover:transform hover:scale-95 hover:underline'
                          : '',
                        'enabled:focus:bg-theme-10',
                        'enabled:focus:transform',
                        'focus:scale-95',
                        'focus:underline',
                        $device.isMobile ? 'w-full' : '',
                      ]"
                      :disabled="!validPhone"
                      @click="submiteForm"
                    >
                      Позвоните мне
                    </button>
                    <button
                      :class="[
                        'py-2',
                        'px-9',
                        'border-1',
                        'rounded-md',
                        'text-theme-8',
                        'text-bold',
                        'bg-theme-2',
                        'border-solid',
                        'hover:bg-theme-2',
                        'hover:transform',
                        'hover:scale-95',
                        'hover:underline',
                        'focus:bg-theme-2',
                        'focus:transform',
                        'focus:scale-95',
                        'focus:underline',
                        $device.isMobile ? 'w-full' : '',
                      ]"
                      @click="switchFormCall"
                    >
                      Отмена
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
// import { Vue, Component } from "vue-property-decorator";
import {
  defineComponent,
  computed,
  ref,
  onMounted,
  watch,
} from "@nuxtjs/composition-api";
import SlickSlider from "~/components/slickSlider.vue";

export default defineComponent({
  components: {
    SlickSlider,
  },
  data() {
    return {
      categories: {
        chose: "provaslavny",
      },
      data: [
        {
          title: "Социальный",
          price: "22 100",
          list: [
            { title: "Гроб ситец", price: "1 500" },
            { title: "Крест узкий", price: "1 000" },
            { title: "Табличка", price: "400" },
            { title: "Могила (кладбище Зайково)", price: "7 500" },
            { title: "Услуги бригады по захоронению", price: "4 000" },
            { title: "Обмывание, одевание умершего", price: "3 500" },
            {
              title: "Помощь в получении необходимых справок и документов",
              price: "1 200",
            },
          ],
        },
        {
          title: "Эконом",
          price: "25 400",
          list: [
            { title: "Гроб ситец либо бархат набивной", price: "2 200" },
            { title: "Крест узкий/широкий", price: "1 100" },
            { title: "Табличка", price: "600" },
            { title: "Могила (кладбище по желанию заказчика)", price: "8 000" },
            { title: "Услуги бригады по захоронению", price: "4 000" },
            {
              title: "Комплект в гроб (покрывало, наволочка)",
              price: "1 500",
            },
            { title: "Обмывание, одевание умершего", price: "3 500" },
            { title: "Венки, ленты", price: "2 000" },
            {
              title: "Помощь в получении необходимых справок и документов",
              price: "1 500",
            },
            { title: "Организация похоронного ритуала", price: "1 000" },
          ],
        },
        {
          title: "Стандарт",
          price: "39 355",
          list: [
            {
              title: "Гроб обивка дизайнерская, атлас либо бархат",
              price: "5 000",
            },
            { title: "Крест металл/дерево либо памятник", price: "1 500" },
            { title: "Табличка", price: "600" },
            { title: "Могила (кладбище по желанию заказчика)", price: "8 000" },
            { title: "Услуги бригады по захоронению", price: "5 000" },
            { title: "Комплект в гроб (покрывало, наволочка)", price: "700" },
            { title: "Катафалк на кладбище и обратно", price: "4 000" },
            { title: "Обмывание, одевание умершего", price: "3 500" },
            { title: "Траурный зал, отпевание(по желанию)", price: "1 500" },
            { title: "Венки, ленты", price: "1 555" },
            {
              title: "Ограда, столик+лавка металл (по желанию)",
              price: "6 000",
            },
            {
              title: "Помощь в получении необходимых справок и документов",
              price: "1 000",
            },
            { title: "Организация похоронного ритуала", price: "1 000" },
          ],
        },
        {
          title: "Премиум",
          price: "64 200",
          list: [
            {
              title: "Гроб элитный (комбинированный либо лакированный)",
              price: "16 000",
            },
            { title: "Крест металл/дерево либо памятник", price: "4 000" },
            { title: "Табличка", price: "2 000" },
            { title: "Могила (кладбище по желанию заказчика)", price: "8 000" },
            { title: "Услуги бригады по захоронению", price: "5 000" },
            { title: "Комплект в гроб (покрывало, наволочка)", price: "1 500" },
            { title: "Обмывание, одевание умершего", price: "3 500" },
            { title: "Катафалк на кладбище и обратно", price: "3 000" },
            { title: "Траурный зал, отпевание(по желанию)", price: "2 100" },
            { title: "Венки, ленты", price: "2 000" },
            {
              title: "Ограда, столик+лавка, полукованные (по желанию)",
              price: "14 400",
            },
            {
              title: "Помощь в получении необходимых справок и документов",
              price: "1 200",
            },
            { title: "Организация похоронного ритуала", price: "1 500" },
          ],
        },
        {
          title: "Суперпремиум",
          price: "82 200",
          list: [
            {
              title:
                "Гроб элитный (шестигранный, восьмигранный лакированный либо с двумя крышками)",
              price: "19 000",
            },
            { title: "Крест металл/дерево либо памятник", price: "5 200" },
            { title: "Табличка", price: "1 200" },
            {
              title: "Могила (кладбище по желанию заказчика)",
              price: "14 000",
            },
            { title: "Услуги бригады по захоронению", price: "5 000" },
            { title: "Комплект в гроб (покрывало, наволочка)", price: "2 200" },
            { title: "Обмывание, одевание умершего", price: "4 500" },
            { title: "Катафалк на кладбище и обратно", price: "3 100" },
            { title: "Траурный зал, отпевание(по желанию)", price: "2 100" },
            { title: "Венки, ленты", price: "4 000" },
            {
              title: "Ограда, столик+лавка, полукованные (по желанию)",
              price: "17 900",
            },
            {
              title: "Помощь в получении необходимых справок и документов",
              price: "1 500",
            },
            { title: "Организация похоронного ритуала", price: "2 200" },
            { title: "Выезд агента на дом", price: "300" },
          ],
        },
      ].reverse(),
    };
  },
  setup(categories) {
    const showAll = ref(null);
    const idVar = ref(null);
    const showList = ref(false);
    const showButtonOrder = ref(true);
    const openForm = ref(false);
    const userName = ref();
    const userPhone = ref();
    const validPhone = ref(false);

    const setting_slider = {
      slidesToShow: 2,
      infinite: true,
      autoplay: true,
      dots: false,
      arrows: false,
      swipe: true,
      slidesToScroll: 1,
      swipeToSlide: true,
      touchMove: true,
    };
    const categoriesTab = ref(categories);

    const setNewChose = (chose) => {
      categoriesTab.value.chose = chose;
      console.log(categoriesTab);
    };

    const switchFormCall = () => {
      openForm.value = !openForm.value;
    };

    const showListButton = () => {
      setTimeout(() => {
        showButtonOrder.value = false;
      }, 100);
    };
    const validationPhone = () => {
      validPhone.value =
        /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
          userPhone.value
        );
    };
    const submiteForm = () => {
      console.log("Send form");
    };
    watch(
      () => userPhone.value,
      () => {
        validationPhone();
      }
    );
    const closeList = () => {
      setTimeout(() => {
        idVar.value = null;
        showAll.value = true;
        showList.value = false;
        window.scrollTo({
          top: document.getElementById("priceList").offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }, 200); // иначе реактивность не успевает
    };
    const insert = (id) => {
      idVar.value = id;
      showAll.value = false;
    };

    onMounted(() => {
      showAll.value = true;
    });

    return {
      closeList,
      insert,
      showAll,
      idVar: computed(() => idVar.value),
      showList,
      setting_slider,
      showButtonOrder,
      showListButton,
      openForm,
      userName,
      userPhone,
      switchFormCall,
      validPhone,
      submiteForm,
      setNewChose,
      categoriesTab
    };
  },
});
</script>

<style lang="scss" scoped>
.phone_view {
  font-size: 11px;
  margin-top: -8%;
  margin-bottom: -8%;
  animation: view 0.6s linear forwards;
}
@keyframes view {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.text-shadow_hover:hover {
  text-shadow: #497fe7 0.1px 0 0.7px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
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