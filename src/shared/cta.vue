<template>
  <div
    :class="[
      'flex',
      'flex-col',
      $device.isMobile
        ? 'justify-items-center justify-self-center pb-9'
        : 'justify-self-end justify-items-end',
      'gap-2',
      'h-max',
      'w-full',
    ]"
  >
    <div
      class="
        inline-flex
        flex-col
        gap-2
        flex-nowrap
        xl:whitespace-nowrap
        mb-6
        w-max
      "
    >
      <span
        >Горячая линия -
        <strong class="text-theme-1">Круглосуточно</strong></span
      >
      <a href="tel:+73522610630" class="font-bold text-2xl"
        >+7 (3522) 610‒630</a
      >
    </div>
    <div class="flex flex-col gap-2">
      <span>Итоговая стоимость</span>
      <span class="font-bold text-lg">{{ price }} руб</span>
    </div>
    <div v-if="!callFrom">
      <button
        v-if="!buttonActive"
        class="
          bg-theme-1
          text-theme-8
          font-semibold
          py-4
          w-full
          rounded-lg
          shadow-lg shadow-theme-8
          transform-gpu
          hover:scale-95
        "
        @click="buttonActive = !buttonActive"
      >
        Связаться с нам
      </button>
      <div v-else class="flex flex-col gap-2">
        <button
          class="
            inline-flex
            gpa-4
            justify-center
            bg-social-wp
            text-theme-8
            font-semibold
            py-4
            rounded-lg
            shadow-lg shadow-theme-8
            transform-gpu
            hover:scale-95
          "
        >
          <font-awesome-icon
            :icon="faWhatsapp"
            transform="shrink-6"
            class="self-center hover:animate-ping shrank-0"
            :style="{ color: '#FFBB30', fontSize: '1.3rem' }"
          />
          Whatsapp
        </button>
        <button
          class="
            inline-flex
            gpa-1
            justify-center
            bg-social-tg
            text-theme-8
            font-semibold
            py-4
            rounded-lg
            shadow-lg shadow-theme-8
            transform-gpu
            hover:scale-95
          "
        >
          <font-awesome-icon
            :icon="faTelegram"
            transform="shrink-6"
            class="self-center hover:animate-ping"
            :style="{ color: '#FFBB30', fontSize: '1.3rem' }"
          />
          Telegram
        </button>
        <button
          class="
            inline-flex
            gpa-1
            justify-center
            bg-theme-1
            text-theme-8
            font-semibold
            py-4
            rounded-lg
            shadow-lg shadow-theme-8
            transform-gpu
            hover:scale-95
          "
          @click="callFrom = !callFrom"
        >
          <font-awesome-icon
            icon="phone"
            transform="shrink-6"
            class="self-center hover:animate-ping"
            :style="{ color: '#FFBB30', fontSize: '1.3rem' }"
          />
          Обратный звонок
        </button>
      </div>
    </div>
    <div v-else class="flex flex-col gap-4">
      <span>Заказать обратный звонок</span>
      <input
        type="text"
        placeholder="Ваше имя"
        class="border-2 border-theme-1 rounded-lg p-2"
      />
      <input
        type="text"
        id='phone'
        placeholder="+7 (___) ___-__-__"
        class="border-2 border-theme-1 rounded-lg p-2"
        v-model="phone"
      /><label v-if="phone.length > 9 && !validation" class="text-theme-7" for="phone">Проверьте правильность номера телефона</label>
      <button class="py-4 bg-theme-1 rounded-md w-full" @click="sendData">Позвонить мне</button>
    </div>
  </div>
</template>


<script>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import {
  faTelegram,
  faTelegramPlane,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

@Component({})
export default class CtaButton extends Vue {
  @Prop({ type: Number, default: 0 }) price;

  get faTelegram() {
    return faTelegramPlane;
  }
  get faWhatsapp() {
    return faWhatsapp;
  }
  phone = "";
  name = "";
  validation = true;

  @Watch("phone")
  validatePhone() {
    const re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    this.validation = re.test(this.phone);

 
  }


  sendData() {
    console.log(this.phone);
  }

  buttonActive = false;
  callFrom = false;

  clickButton() {
    console.log("click");
  }
}
</script>