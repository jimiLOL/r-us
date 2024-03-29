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
    <HoverForPost :post="post"/>
    <Pagination :category_en="post.category_en" :category="post.category" :title="post.title" :post="post" :direction="post.direction"/>


    <p>
      Смерть человека должна быть юридически признана государством с выдачей
      свидетельства о смерти. Этот документ включает такие детали, как
      паспортные данные умершего, когда он умер, где и когда он был
      зарегистрирован, номер акта, а также когда он был официально выдан. Это
      изменение необходимо потому, что умерший человек больше не может
      рассматриваться как субъект права.
    </p>
    <p class="mt-2">
      Свидетельство о смерти с официальной печатью служит подтверждением
      личности умершего и является обязательным документом при организации
      похорон.
    </p>
    <TablePriceforpost :post="post"/>

    <h1 class="text-theme-10 text-shadow text-2xl my-4 ml-2">
      Новое гербовое свидетельство о смерти в {{date}} году
    </h1>
    <p class="my-2">
      С 2019 года вся документация, обрабатываемая органами ЗАГС, включая
      свидетельства о смерти, печатается на бумаге формата а4 с qr-кодом в левом
      верхнем углу. Это сделано для того, чтобы облегчить автоматизацию выдачи
      выписок через систему ugr. Кроме того, для проверки действительности
      указанных документов можно использовать мобильное приложение.
    </p>
    <p class="mb-4">
      К {{ date }} году почти все ЗАГСы и МФЦ будут выдавать документы в новом
      формате. При определенных обстоятельствах ЗАГС может выдать свидетельство
      прежней формы, которое влечет за собой точно такие же юридические
      последствия, как и документы, составленные в обновленном стиле.
    </p>

    <h2 class="text-theme-10 text-shadow text-xl my-3 ml-2">
      Где и как получить гербовое свидетельство о смерти?
    </h2>
    <p>
      Сбор необходимых вещей для похорон — это важная, но трудоемкая работа. В
      связи с этим возникает вопрос: «Где и как я могу получить заверенное
      свидетельство о смерти?».
    </p>
    <p>
      В российской столице Москве свидетельство о смерти теперь можно получить в
      одном из многофункциональных центров. Это сделано вместо прежних ЗАГСов.
      Для этого необходимо обратиться в центр, предоставляющий услуги либо по
      месту смерти умершего, либо по его последнему зарегистрированному адресу
      проживания.
    </p>

    <p>
      Один из способов получить необходимые медицинские документы — обратиться в
      центр, предоставляющий множество услуг, расположенный поблизости от морга
      или больницы, выдавшей свидетельство о смерти. Если смерть наступила
      где-то вне дома, например, на улице или в другом общественном месте, то
      вам следует искать такой центр в том же городе, где скончался человек.
    </p>
    <h2 class="text-theme-10 text-shadow text-xl my-3 ml-2">
      Оформление гербового свидетельства о смерти
    </h2>

    <p>Справка оформляется при предоставлении следующего пакета документов:</p>
    <ul class="list-disc ml-4 mb-4">
      <li>Паспорт покойного</li>
      <li>
        Врачебное свид-во (справки) о смерти (выдается врачом после
        освидетельствования в больнице или дома)
      </li>
      <li>
        Паспорт лица, обратившегося за предоставлением гербового свидетельства.
      </li>
    </ul>

    <p>
      Документ предоставляется родственникам умершего или назначенному ими
      представителю. При необходимости эту роль может взять на себя ритуальный
      агент. Тем не менее, если по каким-либо причинам нет возможности получить
      паспорт умершего, можно представить справку из его жилищного хозяйства по
      месту жительства. Для этого необходимо точно заполнить специальный
      бланк-заявление, так как информация в нем будет использована при
      составлении справки.
    </p>
    <p>
      В многофункциональном центре можно получить ксерокопию гербового
      свидетельства, которая имеет точно такую же юридическую силу, как и
      оригинал. Чтобы воспользоваться этой услугой, необходимо:оригинал
      свидетельства
    </p>
    <ul class="list-disc ml-4 mb-4">
      <li>
        паспорт и документ, удостоверяющий родственные связи предъявителя с
        покойным.
      </li>
      <li>
        письменной форме заявление, в котором указаны причины, из-за которых
        возникла необходимость в копии свидетельства.
      </li>
    </ul>
    <p>
      Документ выдается бесплатно, но за дубликат взимается плата в размере 200
      рублей. Настоятельно рекомендуется получить второй экземпляр документа,
      чтобы избежать потенциальной опасности его неправильной передачи.
    </p>
    <h2 class="text-theme-10 text-shadow text-xl my-3 ml-2">
      Для чего нужно гербовое свидетельство о смерти
    </h2>
    <p>
      Гербовое свидетельство о смерти требуется во многих случаях при
      организации похорон:
    </p>
    <ul class="list-disc ml-4 mb-4">
      <li>
        Получения социальной компенсации на погребение (справка в соответствии с
        формой №11 выдается в МФЦ вместе с гербовым св-вом)
      </li>
      <li>Проведения похорон;</li>
      <li>
        Оформления груза 200 (транспортировки тела умершего в другой город);
      </li>
      <li>Кремации останков в крематории;</li>
      <li>Получения страховых выплат в случае ритуального страхования;</li>
      <li>Оформления Договора на оказание ритуальных услуг;</li>
      <li>Эксгумации останков покойного и его перезахоронения.</li>
    </ul>
    <p>
      Городские похоронные агенты <a class="text-theme-1" href="https://zpd45.ru">zpd45.ru</a> помогут вам с оформлением
      необходимых для этого процесса документов, в число которых входит
      отпечатанное свидетельство о смерти. Для получения более подробной
      информации об этом, пожалуйста, звоните по круглосуточному телефону
      доверия +7 (3522) 610–630.
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
    TablePriceforpost
  },
  head(this: any) {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description_post",
          name: "description",
          content: `Организация похорон – это сложное и важное дело. Поэтому возникает проблема: «Где и как мне получить документ, подтверждающий смерть?».`,
        },
      ],
    };
  },
})
export default class MestoNaKladbishche extends Vue {
  date = new Date().getFullYear();
   post = {
    title: 'Как получить гербовое свидетельство о смерти?',
    picterUrl: '1SRUqTLDdfMfFOWdes-EFCtsPZbEsG7TU',
    category: 'Захоронения',
    category_en: 'zakoronenia',
    items: [{title: 'Омовение'}, {title: 'Транспортировка тела'},{title: 'Гроб'}],
    direction: 'services'


  }
}
</script>