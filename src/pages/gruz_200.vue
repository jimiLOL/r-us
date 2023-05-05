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
    <MenuForPost category_en="all"/>

   <div class="flex flex-col gap-4 pt-20 w-full">
    <HoverForPost :post="post" :load="false"/>

    <Pagination :category_en="post.category_en" :category="post.category" :title="post.title" :post="post" :direction="post.direction"/>
    <p class="my-3">
      Когда в семье случается несчастье, нередко члены семьи умершего оказываются перегружены и не в состоянии уследить за всеми деталями, особенно если трагедия произошла далеко от дома и требует дальних переездов. Будьте уверены, что наша похоронная служба позаботится о том, чтобы груз 200 был доставлен быстро и в соответствии с вашими пожеланиями, соблюдая все формальности
    </p>
   
    <TablePriceforpost :post="post"/>

      <h2 class="font-bold  text-shadow text-2xl my-4 ml-2">ГРУЗ 200 (оцинковка, отправка)</h2>
    <p>
      Наши специалисты готовы решить все проблемы, связанные с доставкой груза 200 и его отправкой, включая международные поездки, из одного города в другой с помощью комплексного сервиса.
    </p>

    
    <p class="my-2">
    <ul class="list-disc ml-4 mb-4">
      <li>Организуем процедуру бальзамации.</li>
      <li>Соберет все необходимые документы и справки (более пяти инстанций).</li>
      <li>Осуществим обязательное в случае переправки умершего — бальзамирование.</li>
      <li>Поместим гроб в специальный цинковый ящик и упакуем его в транспортировочную деревянную конструкцию.</li>
      <li>Договоримся с авиакомпанией или транспортным ж/д бюро.</li>
      <li>Доставим груз до аэропорта или ж/д вокзала.</li>
      <li>Проконтролирует погрузку.</li>
      <li>Оформит прохождение таможни при отправки груза в другую страну.</li>
      <li>Организует встречу груза и прочие действия на месте.</li>
    </ul>
    </p>
    <h2 class="font-bold  text-shadow text-2xl my-4 ml-2">Груз 200: Отправка самолетом</h2>
    <p class="mb-4">
      Когда необходима ускоренная доставка и нет других средств передвижения,
      наиболее удобным вариантом является использование самолета для доставки
      груза 200 в отдаленные места или за границу. Конечно, этот способ имеет
      свои недостатки: необходимо, чтобы груз был доставлен в аэропорт минимум
      за 6 часов до вылета и требуется специальный транспорт— катафалк— для
      транспортировки контейнера от места захоронения до места отправки. Кроме
      того, необходимо сопровождение, что может привести к задержке вылета или
      незапланированным остановкам. Тем не менее, этот способ остается одним из
      самых популярных при доставке груза 200 на дальние расстояния.
    </p>

    <p>
     Другим способом перевозки груза 200 являются Катафальный автотранспорт.
    </p>

    

    <h2 class="font-bold  text-shadow text-xl my-3 ml-2">
      Помощь в оформлении перевозки тела (груза 200)
    </h2>

    <p>
      Агентство <span class="font-bold">ООО «Зауральский Похоронный Дом»</span> обладает опытом, ноу-хау и ресурсами для быстрого и
      экономически эффективного перемещения груза 200 в любой район России.
      Команда транспортно-логистической службы адресного сайта всегда будет
      стремиться обеспечить вам наиболее экономичную и быструю доставку груза
      200.
    </p>

    <CtaGeneral class="my-4" />
    <InformationForHome direction="services" />
  </div>
    
  </div>
 
</template> 


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CtaGeneral from "~/shared/ctaGeneral.vue";
import InformationForHome from "~/components/home/informationBlock.vue";
import MenuForPost from "~/components/menu_for_post/Main.vue";
import Pagination from "~/components/pagination/Main.vue";
import HoverForPost from "~/components/hover_for_post/Main.vue";
import TablePriceforpost from "~/components/table_price_for_post/Main.vue";
import { Getter } from "vuex-class";
import declineNoun from "~/utils/decline";

@Component({
  components: {
    CtaGeneral,
    InformationForHome,
    MenuForPost,
    Pagination,
    HoverForPost,
    TablePriceforpost,
  },
  head(this: any) {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description_post",
          name: "description",
          content: `На данной странице вы найдете подробную информацию об услугах по отправке тел умерших на территории Кругана и Курганской области. Мы предоставляем качественные и оперативные услуги по доставке тел во всех направлениях, включая отправку "Груза 200" по железной дороге или автомобильным транспортом.`,
        },
      ],
    };
  },
})
export default class Gruz200 extends Vue {
  @Getter("city/CITY_G") CITY_G!: any;
  cityName(name: string) {
    return declineNoun(name);
  }
  get name() {
    return this.CITY_G.name;
  }
  date = new Date().getFullYear();
  post = {
    title:
      "Груз 200 (оцинковка, отправка) доставка умерших в Круган и область",
    picterUrl: "1iOf0uHJ3oB82YnCONTyqNirzgYXpc-Dn",
    category: "Организация похорон",
    category_en: "organizaciya_pohoron",
    title_price: "Что входит в стоимость перевозки груза 200?",
    price: "от 20 000 ₽",
    items: [
      { title: "Соберет все необходимые документы и справки" },
      {
        title:
          "Бальзамирование тела умершего.",
      },
      {
        title:
          "Оцинковка гроба и упаковка его в транспортировочную деревянную конструкцию.",
      },
      { title: "Оформление Договора с авиакомпанией." },
      { title: "Доставка груза до аэропорта." },
      { title: "Контроль погрузки и отправки." },
      {
        title:
          "Оформление прохождения таможни при отправке груза в другую страну.",
      },
      {
        title:
          "Организация всех необходимых процедур для получения груза в месте назначения.",
      },
    ],
    direction: "services",
  };
  mounted() {
   this.post.title = `Груз 200 (оцинковка, отправка) доставка умерших в ${this.name} и область`
  }
}
</script>