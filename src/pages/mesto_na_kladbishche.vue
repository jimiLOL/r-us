<template>
  <div
    :class="[
      'flex',
      $device.isMobile ? 'flex-col mb-6' : 'flex-row',
      'justify-center',
      'gap-6',
    ]"
  >
    <MenuForPost category_en="all" />

    <div class="flex flex-col gap-4 pt-20 w-full">
      <HoverForPost :post="post" :load="false" />

      <Pagination
        :category_en="post.category_en"
        :category="post.category"
        :title="post.title"
        :post="post"
        :direction="post.direction"
      />
      <h1 class="font-bold text-shadow text-2xl mb-4 ml-2">
        На каком кладбище хоронить человека в {{ cityName(CITY_G.name) }}?
      </h1>
      <p>
        Курган имеет порядка десяти кладбищ, однако некоторые закрыты для
        захоронений, поскольку их переполненность давно стала проблемой. Таким
        образом, новые захоронения либо подзахоронения в родственную ограду к
        близкому родственнику с доказательством степени родства осуществляются
        на открытых городских кладбищах (Зайковское, Глинки, Малиновка, Смолино,
        мкр.Зайково и т.д.), либо подзахоронения в родственную ограду к близкому
        родственнику с доказательством степени родства на условно закрытых
        кладбищах (Рябковское, Храпово). Также отдельно существует Мусульманское
        кладбище, на сегодняшний день прорабатывается вопрос о планировке
        дополнительного Мусульманского участка на городском Зайковском кладбище.
      </p>
      <p class="mt-2">
        В этом случае существует три варианта для получения доступа к кладбищу в
        {{ cityName(CITY_G.name) }}:
      </p>
      <ul class="list-disc ml-4 mb-4">
        <li>Получить бесплатное место на открытых кладбищах города</li>
        <li>
          Оформить родственное подзахоронение (что позволит хоронить на закрытых
          кладбищах)
        </li>
      </ul>
      <p class="mb-4">
        Однако не все имеют «родственные могилы». Для многих жителей Кургана,
        единственным доступным вариантом провести ритуал похорон и похоронить
        близкого человека является бесплатный участок на открытых для свободного
        захоронения кладбищах. Необходимо помнить, что получение права на
        использование места в городском некрополе представляет собой лишь
        возможность его бессрочного использования под могилу, с условием
        выполнения ухода за участком.
      </p>
      <TablePriceforpost :post="post" />

      <h2 class="font-bold text-shadow text-xl my-3 ml-2">
        Стоимость захоронения на кладбище или сколько стоит место на кладбище в
        {{ cityName(CITY_G.name) }} {{ date }} году?
      </h2>
      <p>
        <span class="font-bold"
          >Согласно Федеральному закону от 12.01.1996 N 8-ФЗ (ред. от
          28.12.2022) "О погребении и похоронном деле",</span
        >
        статья 7.п.1
      </p>
      <p>
        1. На территории Российской Федерации каждому человеку после его смерти
        гарантируются погребение с учетом его волеизъявления, предоставление
        бесплатно участка земли для погребения тела (останков) или праха в
        соответствии с настоящим Федеральным законом.
      </p>
      <p>
        С сентября 2022 года минимальная стоимость услуги по захоронению гроба
        на городских кладбищах (вместе со всеми сопутствующими документами)
        составит от 10 000 рублей, а урну с прахом можно будет упокоить минимум
        за 3 000 рублей. Жители Курганской области имеют доступ к девяносто трем
        кладбищам (по состоянию на сентябрь 2022 года), и любой человек, включая
        тех, кто не имеет регистрации в области, может законно получить участок
        для захоронения своей семьи, представив в местную администрацию
        свидетельство о смерти. Места на кладбище для ветеранов и героев России
        Федеральный закон гарантирует жителям города и области получение
        специальных мест на городских кладбищах, в том числе частных. В
        частности, право на получение мест на этих некрополях имеют ветераны
        войн, герои России и бывшего СССР, а также люди, удостоенные
        государственных наград.
      </p>
      <p class="my-4">К ним относятся:</p>
      <ul class="list-disc ml-4 mb-4">
        <li>Ветераны Великой Отечественной войны;</li>
        <li>Ветераны тыла Великой Отечественной войны;</li>
        <li>Герои России и Советского Союза, герои Социалистического Труда;</li>
        <li>Обладатели почетных премий и государственных наград РФ и СССР;</li>
        <li>Ветераны тыла Великой Отечественной войны;</li>
        <li>Полные кавалеры орденов Славы или Трудовой Славы;</li>
        <li>
          Обладатели почетных званий и наград, полученных от правительства
          города;
        </li>
 
        <li>Родственники первой и второй очереди, супруги;</li>
      </ul>
      <h2 class="font-bold text-shadow text-xl my-3 ml-2">
        Где оформить место на кладбище в Кургане и Курганской области ? К кому
        обращаться?
      </h2>

      <p>
        О том, как получить место на кладбище для погребения человека, вы
        узнаете в городской ритуальной службе
        <a class="text-theme-1 underline" href="https://zpd45.ru"
          >ООО «Зауральский Похоронный Дом»</a
        >
        по номеру круглосуточной информационной линии
        <a href="tel:+7 (3522) 610‒630">+7 (3522) 610‒630</a>. Специалисты
        <a class="text-theme-1 underline" href="https://zpd45.ru"
          >ООО «Зауральский Похоронный Дом»</a
        >
        гарантированно помогут вам получить место на кладбище в подходящем
        варианте.
      </p>
      <p class="font-bold my-2">
        Помните! Если вам предлагают «купить место на кладбище» – это обман.
      </p>
      <p>
        Наши специалисты окажут помощь на всех этапах организации похорон. Мы
        расскажем о существующих вариантах получения места на кладбище – за
        деньги через аукцион или социальные службы, где можно получить участок
        безвозмездно по закону.
      </p>
      <p>
        Если вы решили купить место на кладбище под семейное захоронение, служба
        <a class="text-theme-1 underline" href="https://zpd45.ru"
          >ООО «Зауральский Похоронный Дом»</a
        >
        бесплатно проконсультирует вас о нюансах приобретения прав на участок
        через единую информационную систему похоронной отрасли Ритуал и поможет
        не допустить досадных ошибок.
      </p>
      <CtaGeneral class="my-4" />
      <InformationForHome direction="services" />
      <div class="w-full">
      <KladbishaCategory :page='`full`'/>
        
      </div>
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
import KladbishaCategory from "~/components/kladbisha.vue";

@Component({
  components: {
    CtaGeneral,
    InformationForHome,
    MenuForPost,
    Pagination,
    HoverForPost,
    TablePriceforpost,
    KladbishaCategory,
  },
  head(this: any) {
    return {
      title: this.post.title,
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
  @Getter("city/CITY_G") CITY_G!: any;
  cityName(name: string) {
    return declineNoun(name);
  }
  get name() {
    return this.CITY_G.name;
  }
  date = new Date().getFullYear();
  post = {
    title: `Место на кладбище`,
    picterUrl: "1rSZ8jwSog10dpzcHyc2BLc1cquMGCylP",
    category: "Захоронения",
    category_en: "zakoronenia",
    title_price: `Благоустройство мест захоронения`,
    price: "от 25 000 ₽",
    items: [
      { title: "Памятник из гранита и мрамора" },
      { title: "Комплекс «стол+скамья»" },
      {
        title:
          "Металлическая ограда: от простых традиционных до эксклюзивных, ручной ковки",
      },
      { title: "Озеленение места захоронения растениями" },
      { title: "Правка и ремонт уже установленных памятников и оград" },
      { title: "Устройство покрытия из гранитной или мраморной плитки" },
    ],
    direction: "services",
  };
  mounted() {
    this.post.title = `Место на кладбище в ${this.name} и области`;
    this.post.title_price = `Благоустройство мест захоронения в ${this.name}`;
  }
}
</script>