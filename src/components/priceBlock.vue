<template>
  <div
    id="priceList"
    :class="['flex', 'flex-col', 'px-4', $device.isMobile ? 'pt-20' : 'py-20']"
  >
    <h3
      :class="[
        $device.isMobile ? 'text-center text-2xl' : 'text-4xl',
        'text-bold',
      ]"
    >
      Цены на ритуальные услуги под ключ
    </h3>
    <div class="flex gap-9 text-base pl-4 mt-9 mb-2">
      <span class="hover:underline hover:text-theme-1 cursor-pointer"
        >Православные</span
      >
      <span class="hover:underline hover:text-theme-1 cursor-pointer"
        >Мусульманские</span
      >
      <span class="hover:underline hover:text-theme-1 cursor-pointer"
        >Кремация</span
      >
    </div>
    <div
      :class="[
        'flex',
        'flex-col',
        'border-2',
        'rounded-lg',
        'border-theme-1',
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
              'hover:text-theme-1',
            ]"
            @click="idVar === index ? closeList() : ''"
          >
            <span>{{ item.title }}</span>
            <span class="grow">{{ item.price }} ₽</span>
          </div>

          <div v-if="idVar === index">
            <div
              v-for="(listItem, index) in item.list"
              :key="index"
              class="flex justify-between text-base font-normal py-2 gap-4"
            >
              <span>
                <font-awesome-icon
                  icon="circle-dot"
                  transform="shrink-6"
                  class="self-center hover:animate-ping"
                  :style="{ color: '#FFBB30', fontSize: '20px' }"
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
                    <strong class="text-theme-1">Круглосуточно</strong></span
                  >
                  <a href="tel:+73522610630" class="font-bold"
                    >+7 (3522) 610‒630</a
                  >
                </div>
                <button
                  :class="[
                    'py-2',
                    'px-9',
                    'border-2',
                    'rounded-md',
                    'text-theme-8',
                    'text-bold',
                    'bg-theme-1',
                    'border-solid',
                    'hover:bg-theme-10',
                    'hover:transform',
                    'hover:scale-95',
                    'hover:underline',
                    $device.isMobile ? 'w-full' : '',
                  ]"
                >
                  Заказать комплекс
                </button>
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
} from "@nuxtjs/composition-api";

export default defineComponent({
  data() {
    return {
      data: [
        {
          title: "Социальный",
          price: "8 000",
          list: [
            { title: "Гроб ситец", price: "9 999" },
            { title: "Крест узкий", price: "9 999" },
            { title: "Табличка", price: "9 999" },
            { title: "Могила (кладбище Зайково)", price: "9 999" },
            { title: "Услуги бригады по захоронению", price: "9 999" },
            { title: "Обмывание, одевание умершего", price: "9 999" },
            {
              title: "Помощь в получении необходимых справок и документов",
              price: "9 999",
            },
          ],
        },
        {
          title: "Эконом",
          price: "15 000",
          list: [
            { title: "Гроб ситец либо бархат набивной", price: "9 999" },
            { title: "Крест узкий/широкий", price: "9 999" },
            { title: "Табличка", price: "9 999" },
            { title: "Могила (кладбище по желанию заказчика)", price: "9 999" },
            { title: "Услуги бригады по захоронению", price: "9 999" },
            {
              title: "6.Комплект в гроб (покрывало, наволочка)",
              price: "9 999",
            },
            { title: "Обмывание, одевание умершего", price: "9 999" },
            { title: "Венки, ленты", price: "9 999" },
            {
              title: "Помощь в получении необходимых справок и документов",
              price: "9 999",
            },
            { title: "Организация похоронного ритуала", price: "9 999" },
          ],
        },
        {
          title: "Стандарт",
          price: "20 000",
          list: [
            {
              title: "Гроб обивка дизайнерская, атлас либо бархат",
              price: "9 999",
            },
            { title: "Крест металл/дерево либо памятник", price: "9 999" },
            { title: "Табличка", price: "9 999" },
            { title: "Могила (кладбище по желанию заказчика)", price: "9 999" },
            { title: "Услуги бригады по захоронению", price: "9 999" },
            { title: "Комплект в гроб (покрывало, наволочка)", price: "9 999" },
            { title: "Катафалк на кладбище и обратно", price: "9 999" },
            { title: "Обмывание, одевание умершего", price: "9 9999" },
            { title: "Траурный зал, отпевание(по желанию)", price: "9 9999" },
            { title: "Венки, ленты", price: "9 9999" },
            {
              title: "Ограда, столик+лавка металл (по желанию)",
              price: "9 9999",
            },
            {
              title: "Помощь в получении необходимых справок и документов",
              price: "9 999",
            },
            { title: "Организация похоронного ритуала", price: "9 9999" },
          ],
        },
        {
          title: "Премиум",
          price: "45 000",
          list: [
            {
              title: "Гроб элитный (комбинированный либо лакированный)",
              price: "9 999",
            },
            { title: "Крест металл/дерево либо памятник", price: "9 999" },
            { title: "Табличка", price: "9 999" },
            { title: "Могила (кладбище по желанию заказчика)", price: "9 999" },
            { title: "Услуги бригады по захоронению", price: "9 999" },
            { title: "Комплект в гроб (покрывало, наволочка)", price: "9 999" },
            { title: "Обмывание, одевание умершего", price: "9 999" },
            { title: "Катафалк на кладбище и обратно", price: "9 999" },
            { title: "Траурный зал, отпевание(по желанию)", price: "9 999" },
            { title: "Венки, ленты", price: "9 9999" },
            {
              title: "Ограда, столик+лавка, полукованные (по желанию)",
              price: "9 999",
            },
            {
              title: "Помощь в получении необходимых справок и документов",
              price: "9 999",
            },
            { title: "Организация похоронного ритуала", price: "9 9999" },
          ],
        },
        {
          title: "Суперпремиум",
          price: "55 000",
          list: [
            {
              title:
                "Гроб элитный (шестигранный, восьмигранный лакированный либо с двумя крышками)",
              price: "9 999",
            },
            { title: "Крест металл/дерево либо памятник", price: "9 999" },
            { title: "Табличка", price: "9 999" },
            { title: "Могила (кладбище по желанию заказчика)", price: "9 999" },
            { title: "Услуги бригады по захоронению", price: "9 999" },
            { title: "Комплект в гроб (покрывало, наволочка)", price: "9 999" },
            { title: "Обмывание, одевание умершего", price: "9 999" },
            { title: "Катафалк на кладбище и обратно", price: "9 999" },
            { title: "Траурный зал, отпевание(по желанию)", price: "9 999" },
            { title: "Венки, ленты", price: "9 9999" },
            {
              title: "Ограда, столик+лавка, полукованные (по желанию)",
              price: "9 999",
            },
            {
              title: "Помощь в получении необходимых справок и документов",
              price: "9 999",
            },
            { title: "Организация похоронного ритуала", price: "9 9999" },
            { title: "Выезд агента на дом", price: "9 9999" },
          ],
        },
      ].reverse(),
    };
  },
  setup() {
    const showAll = ref(null);
    const idVar = ref(null);
    const showList = ref(false);

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
    };
  },
});
</script>

<style lang="scss" scoped>
.text-shadow_hover:hover {
  text-shadow: #fc0 0.7px 0 10px;
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