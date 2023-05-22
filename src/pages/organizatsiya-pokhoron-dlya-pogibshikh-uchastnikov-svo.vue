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
        Организация похорон для погибших участников СВО на Украине в {{ cityName(CITY_G.name) }}
      </h2>
      <p class="text-lg mb-4">
       Для тех, кто погиб во время выполнения своего военного долга в рамках Специальной военной операции в Украине, существуют специальные льготы для организации похорон и других нужд. Родственники умершего могут обратиться в военный комиссариат, администрацию региона, где жил военнослужащий, или к руководству воинской части, в которой он был зарегистрирован до участия в военных действиях, чтобы получить эти льготы.
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
         За чей счет проводятся похороны в случае смерти при участии в СВО?
        </h3>
        <p class="text-lg mb-4">
         Для тех, кто умер во время исполнения воинского долга, в рамках Специальной военной операции в Украине, предусмотрены особые льготы для организации похорон и не только. Чтобы получить их, родственники умершего могут обратиться в военный комиссариат и администрацию региона, где проживал военнослужащий, и к руководству воинской части, в которой он числился до участия в военных действиях.
        </p>
        <h3 class="text-2xl font-bold text-center p-8">Как проходят похороны?</h3>

        <p class="text-lg py-4 text-justify">
          В большинстве случаев похороны военнослужащих проводят с соблюдением всех военных почестей. Поэтому умерших в ходе СВО военных хоронят совместно с товарищами по службе.
        </p>

        <p class="text-lg py-4 text-justify">
          В похоронах участников СВО обычно принимают участие члены администрации и руководители военного комиссариата, к которому был прикреплен погибший военнослужащий, а также близкие родственники, друзья покойного и все, кто хочет проститься с умершим.
        </p>
        <h3 class="text-2xl font-bold text-center p-8">Особенности похорон участников СВО с воинскими почестями.</h3>
        <p class="text-lg py-4 text-justify">
          Организовать похороны помогают сотрудники военных комиссариатов. Назначается похоронный эскорт, в котором принимают участие подразделения, назначенные ответственным военачальником. Возле гроба в течение всего времени стоит почетный караул, охраняющий тело покойного.


        </p>
        <p>
          За прощальную музыку отвечает военный оркестр. В отсутствие оркестра ответственность за музыку принадлежит военному барабанщику.
        </p>
        <p>
          Тело покойного перевозят в специальном автомобиле. Обычно — в закрытом гробу. Рядом с гробом ставят подушечки, на которых располагаются ордена, выданные военнослужащему за доблестное выполнение воинских обязанностей.
        </p>
        <p>
          Для проведения похорон умерших в СВО на должном уровне следует обращаться в агентство похоронного обслуживания.

        </p>
        <h3 class="text-2xl font-bold text-center p-8">
          Как проходят захоронения сотрудников частной военной компании?
        </h3>
        <p>
          Захоронение сотрудников ЧВК «Вагнер» осуществляется по правилам гражданской панихиды. По желанию родственников мы организуем захоронение погибших сотрудников ЧВК «Вагнер» по всем правилам захоронения военнослужащих и со всеми воинскими почестями. Захоронение производится с участием почетного караула и оркестра.
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
          content: `Запросы касаются церемоний похорон, связанных с погибшими в Сирийской военной операции (СВО), а также с Частными Военными Компаниями (ЧВК) Вагнера. Требуется информация о похоронах военнослужащих с военными почестями.`,
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
    title: `Организация похорон для погибших участников СВО`,
    picterUrl: "1JAc5CMLca2QZ7Ry-SITJZiiLuorXsjYI",
    category: "Захоронения",
    category_en: "zakoronenia",
    direction: "services",
    title_price: "Сколько стоят похороны: какие расходы включены в цену?",
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
  };
  mounted() {
    // console.log(this.CITY_G.name);
    // this.post.title = `Организация похорон в ${this.CITY_G.name} и области`;
  }
}
</script>