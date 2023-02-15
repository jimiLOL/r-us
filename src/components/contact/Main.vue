<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-4 px-20 text-lg my-4">
      <p>
        Наша команда состоит из опытных профессионалов, которые стремятся
        предоставить уважительные услуги, превосходящие ожидания. Мы считаем,
        что каждый человек заслуживает достойного и спокойного путешествия к
        концу жизни. Наш сострадательный персонал позаботится о том, чтобы
        последние обряды ваших близких были проведены в соответствии с вашими
        пожеланиями с максимальной заботой и уважением.
      </p>
      <p>
        В дополнение к исключительным услугам ритуальное агентство zpd45 также
        предоставляет ряд других полезных услуг, таких как информация об обычаях
        и праздниках, координация с другими поставщиками услуг или членами семьи
        в отношении вашего запроса, размещение заказа и подтверждение деталей
        для любых необходимых предметов или материалов, необходимых для
        похоронного мероприятия, таких как услуги кейтеринга или мемориальные
        изделия, такие как кладбищенские камни. Кроме того, наша команда может
        разработать индивидуальные программы в соответствии с индивидуальными
        предпочтениями, включая подбор музыки для похоронных мероприятий, а
        также оформление в соответствии с темой, выбранной для похорон, для
        более запоминающихся впечатлений.
      </p>
      <p>
        Ритуальное агентство zpd45 понимает, что каждый из нас имеет уникальные
        пожелания, когда дело доходит до организации похорон, независимо от
        того, из какой культурной среды мы происходим, поэтому мы предоставляем
        широкий спектр помощи, ориентируясь на потребности клиентов, чтобы их
        похоронные желания были реализованы именно так, как каждый человек
        хочет, чтобы это было организовано. Мы стремимся облегчить траурный
        процесс в те времена, когда горе бесконечно, а утешение найти нелегко.
        Именно поэтому за годы работы ритуальное агентство zdp45 завоевало
        отличную репутацию, сохраняя верность принципам предельной заботы о
        близких и удовлетворенности клиентов, а также высочайшему стандарту
        предоставления услуг, как юридических, так и личных, связанных с
        организацией похорон в Курганской области.
      </p>
      <p>
        Если вам требуется профессиональная помощь в организации похорон, вы
        можете положиться на нашу компанию ритуальное агентство zpd45, которая
        быстро и надежно удовлетворит ваши потребности!
      </p>
    </div>
    <h1
      :class="[
        'text-bold',
        $device.isMobile ? 'text-2xl text-center' : 'text-4xl',
      ]"
    >
      Контактная информация
    </h1>
    <div :class="['flex', $device.isMobile ? 'flex-col' : 'flex-row', 'gap-6']">
      <div class="w-full rounded-md">
        <GMap
          ref="gMap"
          :cluster="{ options: { styles: clusterStyle } }"
          :center="{ lat: locations[0].lat, lng: locations[0].lng }"
          :options="{ fullscreenControl: false }"
          :zoom="12"
        >
          <GMapMarker
            v-for="location in locations"
            :key="location.id"
            :position="{ lat: location.lat, lng: location.lng }"
            :options="{
              icon:
                location === currentLocation ? pins.selected : pins.notSelected,
              zoom: location === currentLocation ? 5 : 12,
            }"
            @click="currentLocation = location"
          />
        </GMap>
      </div>
      <div
        :class="[
          'flex',
          'flex-col',
          $device.isMobile ? 'items-center text-center mb-9' : '',
          'gap-4',
        ]"
      >
        <div
          :class="['flex', 'flex-col', $device.isMobile ? 'self-center' : '']"
        >
          <span
            >Горячая линия -
            <strong class="text-theme-10 text-shadow">Круглосуточно</strong></span
          >
          <a href="tel:+73522610630" class="font-bold text-2xl"
            >+7 (3522) 610‒630</a
          >
        </div>
        <h2 class="text-bold text-2xl">Наши адреса:</h2>
        <div class="inline-flex flex-col justify-center whitespace-nowrap">
          <address class="text-lg font-semibold md:text-base">
            пр-кт Машиностроителей, 34
          </address>
          <a class="font-thin" href="tel:+73522256075">+7 (3522) 25‒60‒75</a>
          <span class="font-thin">с 08:00 до 17:00</span>
        </div>
        <div class="inline-flex flex-col justify-center whitespace-nowrap">
          <address class="text-lg font-semibold md:text-base">
            ул. Коли Мяготина 102а
          </address>
          <a class="font-thin" href="tel:+73522256075">+7 (3522) 622‒000</a>
          <span class="font-thin">с 08:00 до 17:00</span>
        </div>
        <div class="inline-flex flex-col justify-center whitespace-nowrap">
          <address class="text-lg font-semibold md:text-base">
            ул. Томина, 67
          </address>
          <a class="font-thin" href="tel:+79128355992">+7‒912‒835‒59‒92</a>
          <span class="font-thin">с 08:00 до 17:00</span>
        </div>
        <div class="inline-flex flex-col justify-center whitespace-nowrap">
          <address class="text-lg font-semibold md:text-base">
            ул. Карбышева 35к5
          </address>
          <a class="font-thin" href="tel:+73522554400">+7 (3522) 554‒400 </a>
          <!-- <span> +7 (3522) 555‒332</span> -->
          <span class="font-thin">с 08:00 до 17:00</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Contact extends Vue {
  data() {
    return {
      currentLocation: {},
      locations: [
        {
          lat: 55.47102113063039,
          lng: 65.3265965779111,
        },
        {
          lat: 55.43956887351162,
          lng: 65.33288922705418,
        },
        // {
        //   lat: 55.43929837413723,
        //   lng: 65.3344900828764,
        // },
        {
          lat: 55.502478893111416,
          lng: 65.30904952520756,
        },
      ],
      pins: {
        selected:
          "data:image/png;base64,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",
        notSelected:
          "data:image/png;base64,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",
      },
      clusterStyle: [
        {
          url: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png",
          width: 56,
          height: 56,
          textColor: "#fff",
        },
      ],
    };
  }
}
</script>