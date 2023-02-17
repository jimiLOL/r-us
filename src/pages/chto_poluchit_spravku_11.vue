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
    <MenuForPost category_en="all" />

    <div class="flex flex-col gap-4 pt-20 w-full px-9 font-normal text-base">
      <HoverForPost :post="post" />
      <Pagination
        :category_en="post.category_en"
        :category="post.category"
        :title="post.title"
        :post="post"
        :direction="post.direction"
      />

      <p>
        При планировании похорон необходимо приобрести форму №. 11, также
        известную как «свидетельство о смерти» или «справка о пособии
        на погребение», вместе с гербовой печатью о смерти.
      </p>

      <h1 class="text-theme-10 text-shadow text-2xl my-4 ml-2">
        Для чего нужна справка о смерти?
      </h1>
      <p class="my-2">
        Получить право на установленное законом пособие на погребение,
        включающее денежные выплаты и компенсации в качестве услуг или
        бесплатные (безвозмездные) похороны, исходя из перечисленных услуг
        и товаров, используемых для погребения, с помощью аккредитованной
        городской службы zpd45.ru невозможно, не имея свидетельства о смерти
        по форме № 11.
      </p>
    <TablePriceforpost :post="post"/>

      <p class="mb-4">
        Пенсионный фонд или департамент социального обеспечения должны получить
        похоронное свидетельство вместе с заявлением на получение пособия
        на погребение и другими сопутствующими документами.
      </p>

      <h2 class="text-theme-10 text-shadow text-xl my-3 ml-2">Где получить справку №11</h2>
      <p>
        Сертификат No. 11 выдается либо в МФЦ, либо в ЗАГСе. Чтобы получить его,
        вам необходимо посетить любое из следующих мест:
      </p>
      <ul class="list-disc ml-4 mb-4">
        <li>МФЦ или ЗАГС по последнему месту регистрации покойного;</li>
        <li>МФЦ или ЗАГС по месту смерти покойного;</li>
        <li>
          МФЦ или ЗАГС по месту расположения медучреждения, установившего
          смерть.
        </li>
      </ul>

      <h2 class="text-theme-10 text-shadow text-xl my-3 ml-2">
        Необходимые документы для получения справки на погребение №11
      </h2>

      <p>
        Справку о смерти получают вместе и одновременно с гербовым
        свидетельством о смерти. Для этого нужно предоставить документы:
      </p>
      <ul class="list-disc ml-4 mb-4">
        <li>Паспорт покойного;</li>
        <li>
          Врачебное свидетельство о смерти (выдается врачом после
          освидетельствования в больнице или дома);
        </li>
        <li>
          Паспорт лица, обратившегося за предоставлением гербового
          свидетельства.
        </li>
      </ul>

      <p>
        Если сотрудник мфц по какой-либо причине не предоставляет справку формы
        11, необходимо напомнить семье умершего человека о необходимости
        получить этот документ. Необходимо знать, что если эта справка не будет
        получена, то и отдел социального обеспечения, и пенсионный фонд откажут
        в выплате пособия.
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

@Component({
  components: {
    CtaGeneral,
    InformationForHome,
    MenuForPost,
    Pagination,
    HoverForPost,
    TablePriceforpost,
  },
  head() {
    return {
      title: "Где и как получить справку о смерти по форме №11",
      meta: [
        {
          hid: "description_post",
          name: "description",
          content: `Как приобрести захоронение на кладбище в ритуальном агентстве zpd45.ru? Служба похоронных услуг Кургане - самая старая и надежная. Гарантируем высокое качество и безотказную работу.`,
        },
      ],
    };
  },
})
export default class MestoNaKladbishche extends Vue {
  date = new Date().getFullYear();
  post = {
    title: "Для чего нужна справка о смерти?",
    picterUrl: "1SRUqTLDdfMfFOWdes-EFCtsPZbEsG7TU",
    category: "Захоронения",
    category_en: "zakoronenia",
    items: [
      { title: "Омовение" },
      { title: "Транспортировка тела" },
      { title: "Гроб" },
    ],
    direction: 'services'
  };
}
</script>