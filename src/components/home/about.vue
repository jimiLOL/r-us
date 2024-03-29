<template>
  <div :class="['flex flex-col gap-4 text-black', $device.isMobile? 'text-center':'']">
    <span :class="[$device.isMobile ? 'text-2xl' : 'text-4xl', 'font-bold']"
      >Об организации похорон нашей компанией </span
    >
    <div :class="[!$device.isMobile?'text-lg w-2/3':'w-full']">
      <p class="pb-2">
       Наступил момент окончания жизни наших близких и родственников, и мы осознаем важность уважительного подхода к этому трагическому событию. Мы стремимся обеспечить все необходимые ритуальные услуги в соответствии с вероисповеданием или завещанием ушедшего, проявляя высокую чувствительность и этичность в своей работе.
      </p>
      <p class="my-2">
        Команда наших специалистов по организации похорон готова взять на себя
        все вопросы и заботы, связанные с этим трудным периодом. Мы предлагаем
        широкий спектр ритуальных услуг, начиная от получения медицинского
        свидетельства о смерти, до транспортировки гроба с телом покойного и
        организации поминального обеда.
      </p>
      <p class="my-2">
        Мы понимаем, что эта ситуация может быть очень эмоциональной и сложной
        для наших клиентов, и поэтому наши специалисты всегда обслуживают
        клиентов деликатно и тактично.
      </p>
      <p class="my-2">
        Вы можете доверить нам организацию похорон, и мы обеспечим согласование
        всех важных вопросов с администрацией кладбища или крематория, доставку
        всех ритуальных принадлежностей в морг, а также живых цветов на
        церемонию прощания. Мы также готовы предложить поминальную панихиду и
        обеспечить транспорт для сопровождающих родственников.
      </p>
      <p class="my-2">
        Мы готовы взять на себя все вопросы, связанные с организацией похорон,
        начиная от оформления документов до заказа поминального обеда. Мы ценим
        и уважаем пожелания и запросы наших клиентов и стараемся выполнить их
        тактично и бережно, чтобы увековечить память об усопшем.
      </p>
    </div>
    <SlickSlider ref="forSlick" :settings="setting_slider">
      <div v-for="(item, index) in dataImgSlider" :key="index">
        <div class="box px-0">
          <div class="p-0 rounded-lg border-0">
            <img
              class="rounded-lg w-full"
              :src="require(`~/assets/imgs/${item.img}`)"
              :alt="`${item.title} в ${cityName}`"
            />
          </div>
        </div>
      </div>
    </SlickSlider>
    <div class="flex justify-center items-center my-2 px-20 w-full">
      <div
        v-if="!$device.isMobile"
        class="flex justify-center items-center w-full"
      >
        <div class="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="
              w-4
              h-4
              text-theme-1
              bg-gray-100
              border-gray-300
              focus:ring-theme-1
              dark:focus:ring-blue-600 dark:ring-offset-gray-800
              focus:ring-2
              dark:bg-gray-700 dark:border-gray-600
            "
          />
          <label
            for="default-radio-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          ></label>
        </div>
        <div class="flex items-center">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="
              w-4
              h-4
              text-theme-1
              bg-gray-100
              border-gray-300
              focus:ring-theme-1
              dark:focus:ring-blue-600 dark:ring-offset-gray-800
              focus:ring-2
              dark:bg-gray-700 dark:border-gray-600
            "
          />
          <label
            for="default-radio-2"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          ></label>
        </div>
      </div>

      <NuxtLink
        to="/employee"
        no-prefetch
        class="
          justify-self-end
          inline-flex
          items-center
          mt-4
          flex-shrink-0
          text-lg
          align-baseline
          text-black
          font-bold
          hover:underline hover:text-theme-10
        "
        >Узнать больше о сотрудниках
        <font-awesome-icon
          icon="arrow-right"
          transform="shrink-6"
          class="self-center hover:animate-ping w-8"
          :style="{ color: '#222' }"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import { Getter } from "vuex-class";
import declineNoun from "~/utils/decline";


@Component({})
export default class AboutForHomePage extends Vue {
   @Getter("city/CITY_G") CITY_G;

  get cityName() {
    return declineNoun(this.CITY_G.name);
  }
  dataImgSlider = [
    { title: "Молитвенный дом", img: "cc5cdec7d436aff2ddf4298b0f1163dc.jpg" },
    { title: "Молитвенный дом", img: "img_slider_for_1.jpg" },
    { title: "Траурный зал", img: "img_slider_for_2.jpg" },
    { title: "Траурный зал", img: "img_slider_for_3.jpg" },
    { title: "Траурный зал", img: "img_slider_for_4.jpg" },
    { title: "Траурный зал", img: "img_slider_for_6.jpg" },
    { title: "Траурный зал", img: "img_slider_for_6.jpg" },
  ];

  setting_slider = {
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    dots: false,
    arrows: false,
    swipe: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
  };
}
</script>


<style lang="scss" scoped>
/* для элемента input c type="radio" */

input[type="radio"]:checked,
input[type="radio"]:not(:checked) {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

input[type="radio"]:checked + label,
input[type="radio"]:not(:checked) + label {
  display: inline-block;
  position: relative;
  padding-left: 28px;
  line-height: 20px;
  cursor: pointer;
}

input[type="radio"]:checked + label:before,
input[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  width: 22.24px;
  height: 22.24px;
  border: 0.77px solid #79a7f3;
  background-color: #ffffff;
  @media (max-width: 980px) {
    left: -10px;
    top: -5px;
    width: 32.24px;
    height: 32.24px;
  }
}

input[type="radio"]:checked + label:before,
input[type="radio"]:not(:checked) + label:before {
  border-radius: 100%;
}

input[type="radio"]:checked + label:after,
input[type="radio"]:not(:checked) + label:after {
  content: "";
  position: absolute;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

input[type="radio"]:checked + label:after,
input[type="radio"]:not(:checked) + label:after {
  left: 4.8px;
  top: 4.8px;
  width: 12.51px;
  height: 12.51px;
  border-radius: 100%;
  background-color: #79a7f3;
  @media (max-width: 980px) {
    left: 0px;
  }
}

input[type="radio"]:not(:checked) + label:after {
  opacity: 0;
}

input[type="radio"]:checked + label:after {
  opacity: 1;
}

.images-line {
  animation: runner 85s linear infinite alternate;
  transform: translateY(-23%);
  &:hover {
    animation-play-state: paused;
    cursor: pointer;
  }
}
.images-line_reverse {
  animation: runner-reverse 85s linear infinite alternate;
  transform: translateY(-53%);
  &:hover {
    animation-play-state: paused;
    cursor: pointer;
  }
}
@keyframes runner-reverse {
  to {
    transform: translateY(0.5%);
  }
}

@keyframes runner {
  to {
    transform: translateY(-50.4%);
  }
}
/* we will explain what these classes do next! */
</style>