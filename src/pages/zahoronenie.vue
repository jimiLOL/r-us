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
        :post="post" :direction="post.direction"
      />
      <p>
        Смерть любимого человека может стать огромным потрясением, что
        затрудняет планирование похорон. Чтобы помочь и облегчить бремя
        родственников умершего, ритуал-профи специализируется на предоставлении
        полного комплекса услуг по организации похоронной церемонии.
      </p>

      <p>
        Вы можете обратиться в агентство в любое время, после чего к вам приедет
        ритуальный агент, который ответит на все возникшие вопросы и поможет
        организовать похороны. Сотрудник компании самостоятельно выполнит:
      </p>
      <TablePriceforpost :post="post" />

      <ul class="list-disc ml-4 mb-4">
        <li>Сбор необходимых документов;</li>
        <li>Подбор атрибутов для захоронения;</li>
        <li>Выбор места на кладбище;</li>
        <li>Выбор транспорта для доставки;</li>
        <li>Организация церемонии прощания и поминальной трапезы;</li>
      </ul>
      <p>
        Команда сотрудников похоронного бюро будет отвечать за все похороны,
        гарантируя, что родственники умершего будут избавлены от дополнительных
        хлопот и возможных плохих впечатлений. Благодаря многолетнему опыту
        работы в этой сфере мы накопили большой объем знаний, которые используем
        для организации похорон по разумной цене.
      </p>
      <h2 class="text-theme-10 text-shadow text-xl my-3 ml-2">
        С нами надежно и качественно
      </h2>
      <p>
        Заключая договор с «Ритуальной службой» (служба zpd45.ru), клиенты могут
        быть уверены, что не столкнутся ни с какими задержками или
        мошенническими действиями, что, к сожалению, стало довольно
        распространенным явлением в похоронной индустрии. Наше предприятие
        зарегистрировано и работает уже более 21 года, с тех пор адрес
        и название организации ни разу не менялись. Мы гордимся тем, что
        организовали более 100 000 захоронений по Кургану и области — этого
        достаточно, чтобы доказать нашу надежность и качество услуг.
      </p>
      <h2 class="text-theme-10 text-shadow text-xl my-3 ml-2">
        Организация похорон пенсионера в Кургане
      </h2>
      <p>
        Zpd45.ru славится своими услугами в Кургане, в частности, организацией
        похорон пенсионеров. Наша команда имеет большой опыт в организации
        похорон льготников, таких как пожилые люди и ветераны из Москвы
        и Московской области. Выбрав нас в качестве поставщика услуг, вы можете
        быть уверены, что все государственные льготы, доступные этим людям,
        будут учтены при организации похорон с должным вниманием.
      </p>

      <p class="mt-4">
        Трагический опыт для семьи и друзей, уход из жизни любимого человека
        можно сделать более терпимым, если поручить оформление документов агенту
        zpd45.ru. Они соберут все необходимые документы, подадут заявку на
        получение пособия на погребение и организуют похороны. Просто позвоните
        на нашу горячую линию по телефону
        <a href="tel:+7 (3522) 610‒630">+7 (3522) 610‒630</a>, чтобы за вами
        закрепили агента — мы работаем круглосуточно и без выходных.
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
  date = new Date().getFullYear();
  post = {
    title: "Организация похорон в Кургане и Курганской области",
    picterUrl: "1SRUqTLDdfMfFOWdes-EFCtsPZbEsG7TU",
    category: "Захоронения",
    category_en: "zakoronenia",
    direction: 'services',
    items: [
      { title: "Омовение" },
      { title: "Транспортировка тела" },
      { title: "Гроб" },
    ],
  };
}
</script>