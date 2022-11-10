<template>
  <div class="flex flex-col gap-9 px-4 py-20">
    <h3 class="text-bold text-4xl">Цены на ритуальные услуги под ключ</h3>
    <div class="flex gap-9 text-base">
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
      class="
        flex flex-col
        border-2
        rounded-lg
        border-theme-1 border-solid
        text-lg
        font-bold
        px-9
        gap-2
      "
    >
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
            idVar == index || index == 4 ? '' : 'border-b-2 text-shadow_hover',
            'border-solid',
            'cursor-pointer',
            'hover:text-theme-1',
          ]"
        >
          <span>{{ item.title }}</span>
          <span>{{ item.price }} ₽</span>
        </div>
        <div v-if="idVar === index">
          <div
            v-for="(listItem, index) in item.list"
            :key="index"
            class="flex justify-between text-base font-normal py-2"
          >
            <span>{{ listItem.title }}</span>
            <span>{{ listItem.price }} ₽</span>
          </div>
          <div class="flex justify-between py-20">
            <div>
              <button
                class="
                  py-2
                  px-9
                  border-2
                  rounded-md
                  border-theme-1 border-solid
                  hover:bg-theme-10
                  hover:transform
                  hover:scale-95
                  hover:underline
                  hover:text-black
                "
                @click="close()"
              >
                Закрыть
              </button>
            </div>
            <div class="flex content-center gap-14">
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
                class="
                  py-2
                  px-9
                  border-2
                  rounded-md
                  text-theme-8 text-bold
                  bg-theme-1
                  border-solid
                  hover:bg-theme-10
                  hover:transform
                  hover:scale-95
                  hover:underline
                "
              >
                Заказать комплекс
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Vue, Component } from "vue-property-decorator";
import {
  defineComponent,
  computed,
  ref,
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
      ],
    };
  },
  setup() {
    const showAll = ref(true);
    const idVar = ref(null);

    const close = () => {
        idVar.value = null;
        showAll.value = true;
    };
    const insert = (id) => {
        idVar.value = id;
        showAll.value = false;
    };

    return {
        close,
        insert,
        showAll,
        idVar
    }
  }
});

// @Component({})
// export default class PriceBlock extends Vue {
//   showAll = true;
//   idVar = null;

//   data = [
//     {
//       title: "Социальный",
//       price: "8 000",
//       list: [
//         { title: "Гроб ситец", price: "9 999" },
//         { title: "Крест узкий", price: "9 999" },
//         { title: "Табличка", price: "9 999" },
//         { title: "Могила (кладбище Зайково)", price: "9 999" },
//         { title: "Услуги бригады по захоронению", price: "9 999" },
//         { title: "Обмывание, одевание умершего", price: "9 999" },
//         {
//           title: "Помощь в получении необходимых справок и документов",
//           price: "9 999",
//         },
//       ],
//     },
//     {
//       title: "Эконом",
//       price: "15 000",
//       list: [
//         { title: "Гроб ситец либо бархат набивной", price: "9 999" },
//         { title: "Крест узкий/широкий", price: "9 999" },
//         { title: "Табличка", price: "9 999" },
//         { title: "Могила (кладбище по желанию заказчика)", price: "9 999" },
//         { title: "Услуги бригады по захоронению", price: "9 999" },
//         { title: "6.Комплект в гроб (покрывало, наволочка)", price: "9 999" },
//         { title: "Обмывание, одевание умершего", price: "9 999" },
//         {title: 'Венки, ленты', price: '9 999'},
//         {
//           title: "Помощь в получении необходимых справок и документов",
//           price: "9 999",
//         },
//         {title: 'Организация похоронного ритуала', price: '9 999'}
//       ],
//     },
//     {
//       title: "Стандарт",
//       price: "20 000",
//       list: [
//         { title: "Гроб обивка дизайнерская, атлас либо бархат", price: "9 999" },
//         { title: "Крест металл/дерево либо памятник", price: "9 999" },
//         { title: "Табличка", price: "9 999" },
//         { title: "Могила (кладбище по желанию заказчика)", price: "9 999" },
//         { title: "Услуги бригады по захоронению", price: "9 999" },
//         { title: "Комплект в гроб (покрывало, наволочка)", price: "9 999" },
//         { title: "Катафалк на кладбище и обратно", price: "9 999" },
//         {title: 'Обмывание, одевание умершего', price: '9 9999'},
//         {title: 'Траурный зал, отпевание(по желанию)', price: '9 9999'},
//         {title: 'Венки, ленты', price: '9 9999'},
//         {title: 'Ограда, столик+лавка металл (по желанию)', price: '9 9999'},
//         {
//           title: "Помощь в получении необходимых справок и документов",
//           price: "9 999",
//         },
//         {title: 'Организация похоронного ритуала', price: '9 9999'}
//       ],
//     },
//     {
//       title: "Премиум",
//       price: "45 000",
//       list: [
//         { title: "Гроб элитный (комбинированный либо лакированный)", price: "9 999" },
//         { title: "Крест металл/дерево либо памятник", price: "9 999" },
//         { title: "Табличка", price: "9 999" },
//         { title: "Могила (кладбище по желанию заказчика)", price: "9 999" },
//         { title: "Услуги бригады по захоронению", price: "9 999" },
//         { title: "Комплект в гроб (покрывало, наволочка)", price: "9 999" },
//         { title: "Обмывание, одевание умершего", price: "9 999" },
//         {title: 'Катафалк на кладбище и обратно', price: '9 999'},
//         {title: 'Траурный зал, отпевание(по желанию)', price: '9 999'},
//         {title: 'Венки, ленты', price: '9 9999'},
//         {title: 'Ограда, столик+лавка, полукованные (по желанию)', price: '9 999'},
//         {
//           title: "Помощь в получении необходимых справок и документов",
//           price: "9 999",
//         },
//          {title: 'Организация похоронного ритуала', price: '9 9999'}
//       ],
//     },
//     {
//       title: "Суперпремиум",
//       price: "55 000",
//       list: [
//         { title: "Гроб элитный (шестигранный, восьмигранный лакированный либо с двумя крышками)", price: "9 999" },
//         { title: "Крест металл/дерево либо памятник", price: "9 999" },
//         { title: "Табличка", price: "9 999" },
//         { title: "Могила (кладбище по желанию заказчика)", price: "9 999" },
//         { title: "Услуги бригады по захоронению", price: "9 999" },
//         { title: "Комплект в гроб (покрывало, наволочка)", price: "9 999" },
//         { title: "Обмывание, одевание умершего", price: "9 999" },
//         {title: 'Катафалк на кладбище и обратно', price: '9 999'},
//         {title: 'Траурный зал, отпевание(по желанию)', price: '9 999'},
//         {title: 'Венки, ленты', price: '9 9999'},
//         {title: 'Ограда, столик+лавка, полукованные (по желанию)', price: '9 999'},
//         {
//           title: "Помощь в получении необходимых справок и документов",
//           price: "9 999",
//         },
//          {title: 'Организация похоронного ритуала', price: '9 9999'},
//          {title: 'Выезд агента на дом', price: '9 9999'}
//       ],
//     },
//   ];
//     close() {
//     this.idVar = 0;
//     this.showAll = true;
//     console.log(this.idVar, this.showAll);
//   }

//   insert(idVar) {
//     this.idVar = idVar;
//     this.showAll = false;
//   }
// }
</script>

<style scoped>
.text-shadow_hover:hover {
  text-shadow: #fc0 0.7px 0 10px;
}
</style>