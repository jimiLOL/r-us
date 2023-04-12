<template>
  <div
    :class="[
      'flex',
      $device.isMobile ? 'flex-col mb-6' : 'flex-row',
      'justify-center',
      'gap-6',
    ]"
  >
    <!-- <MenuForPost category_en="all" /> -->

    <div class="flex flex-col gap-4 pt-20 w-full">
      <HoverForPost :post="post" :load="false" />
      <Pagination
        :category_en="post.category_en"
        :category="post.category"
        :title="post.title"
        :post="post"
        :direction="post.direction"
      />
      <h2 class="text-2xl font-bold mb-8 text-center p-8">
        Аренда ритуального транспорта
      </h2>
      <p class="text-lg mb-4">
        Наша компания предоставляет профессиональные услуги ритуального
        транспорта для уважительной и безопасной доставки усопшего к месту
        панихиды и захоронения. Мы осуществляем аренду различных видов
        транспорта, таких как катафалки для близких перевозок, спецтранспорт с
        климат-контролем для дальних перевозок, а также пассажирские минивэны и
        микроавтобусы для сопровождающих гостей.
      </p>
        <h3 class="text-2xl font-bold text-center mb-3">Наш автопарк</h3>

      <div class="flex gap-2 flex-wrap items-center justify-center">
        <img class="w-96 rounded-md" src="https://drive.google.com/uc?export=view&id=1TK2S5o2oytaA6Hxx1-tt3Qdi-MG5WPkQ" alt="">
        <img class="w-96 rounded-md" src="https://drive.google.com/uc?export=view&id=1CZiOLCbEbMFHBOM5mS9GPNsr1O8xPUEp" alt="">
        <img class="w-96 rounded-md" src="https://drive.google.com/uc?export=view&id=1JAc5CMLca2QZ7Ry-SITJZiiLuorXsjYI" alt="">
        <img class="w-96 rounded-md" src="https://drive.google.com/uc?export=view&id=1sXyeBJwyOZg95bCRaF5WXymgzSliwe_u" alt="">
       
        
        
        
      </div>
      <!-- <AboutServices /> -->

      <div class="list-decimal">
        <h3 class="text-2xl font-bold text-center p-8">
          Заказ ритуального транспорта в {{ cityName(CITY_G.name) }}
        </h3>
        <p class="text-lg mb-4">
          Наша компания уделяет особое внимание этике и безопасности при
          проведении похорон. У нас в распоряжении собственный автопарк, и к
          каждому транспортному рейсу мы подбираем опытного водителя с знанием
          кратчайших маршрутов и соответствующими разрешениями на проход в
          местах захоронения.
        </p>

        <p class="text-lg py-4 text-justify">
          Мы гарантируем своевременную доставку и соблюдение всех санитарных
          норм, включая дезинфекцию салонов и отсеков после каждого рейса. Наши
          цены адекватны и зависят от количества посещаемых объектов и времени в
          пути.
        </p>

        <p class="text-lg py-4 text-justify">
          Обращаясь к нам, вы можете быть уверены в исполнении всех
          обязательств, высоком уровне сервиса и уважительном отношении к вашей
          скорби. Мы заботимся о каждой детали, чтобы вы могли сосредоточиться
          на главном – прощании с покойным. Закажите ритуальный транспорт у нас
          сегодня, и мы обеспечим безопасную, уважительную и беспроблемную
          доставку на последний путь.
        </p>
      </div>

      <HowWeWork />
      <CtaGeneral class="my-4" />

      <!-- <TablePriceforpost :post="post" /> -->

      <!-- <InformationForHome direction="services" /> -->
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
import AboutServices from "~/components/aboutService.vue";
import HowWeWork from "~/components/howwework.vue";
import declineNoun from "~/utils/decline";

@Component({
  components: {
    CtaGeneral,
    InformationForHome,
    MenuForPost,
    Pagination,
    HoverForPost,
    TablePriceforpost,
    AboutServices,
    HowWeWork,
  },
  head(this: any) {
    return {
      title: this.post.title + " | " + this.cityName(this.CITY_G.name),
      meta: [
        {
          hid: "description_post",
          name: "description",
          content: `Арендуя ритуальный транспорт в нашей компании, вы можете быть уверены в качестве наших услуг и поддержке на каждом этапе.`,
        },
      ],
    };
  },
})
export default class Covid19 extends Vue {
  @Getter("city/CITY_G") CITY_G!: any;

  cityName(name: string) {
    return declineNoun(name);
  }

  date = new Date().getFullYear();
  post = {
    title: `Заказ ритуального транспорта`,
    picterUrl: "1JAc5CMLca2QZ7Ry-SITJZiiLuorXsjYI",
    category: "Захоронения",
    category_en: "zakoronenia",
    direction: "services",
    title_price: "Сколько стоят похороны: какие расходы включены в цену?",
    price: "от 20 000 ₽",
    items: [
      { title: "Омовение" },
      {
        title:
          "Подготовительный этап, включающий сбор необходимых документов и оформление договора с похоронными агентствами.",
      },
      {
        title:
          "Транспортировка тела умершего в морг или крематорий (если необходимо).",
      },
      {
        title:
          "Организация и проведение церемонии прощания по усопшему (в церкви или в помещении похоронной службы).",
      },
      { title: "Перевозка тела на кладбище и проведение процессии." },
      { title: "Оформление могильного участка и похоронное обряд" },
    ],
  };
  mounted() {
    // console.log(this.CITY_G.name);
    // this.post.title = `Организация похорон в ${this.CITY_G.name} и области`;
  }
}
</script>