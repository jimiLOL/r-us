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
        <strong class="text-theme-10 text-shadow">Круглосуточно</strong></span
      >
      <a href="tel:+73522610630" class="font-bold text-2xl"
        >+7 (3522) 610‒630</a
      >
    </div>
    <div class="flex flex-col gap-2">
      <span>Итоговая стоимость</span>
      <span class="font-bold text-lg">{{ price }} руб</span>
    </div>
    <div v-if="!callFrom && !statusService">
      <button
        v-if="!buttonActive"
        class="
          bg-theme-1
          text-theme-8
          font-semibold
          py-4
          w-full
          h-max
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
            h-max
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
            h-max
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
            h-max
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
    <div v-if="callFrom && !statusService" class="flex flex-col gap-4">
      <span>Заказать обратный звонок</span>
      <input
        type="text"
        placeholder="Ваше имя"
        class="border-2 border-theme-1 rounded-lg p-2"
        v-model="name"
      />
      <input
        type="text"
        id='phone'
        placeholder="+7 (___) ___-__-__"
        class="border-2 border-theme-1 rounded-lg p-2"
        v-model="phone"
      /><label v-if="phone.length >= 12 && !validation" class="text-theme-7" for="phone">Проверьте правильность номера телефона</label>
      <button :class="['inline-flex', 'justify-center', 'gap-2', 'py-4', 'rounded-md', 'w-full', validation?'bg-theme-1 hover:bg-theme-10':'cursor-not-allowed bg-theme-4']" @click="sendData">
         <LoadingIcon
         v-if="viewAnimation"
            icon="puff"
            color="black"
            :class="`${$device.isMobile ? 'w-4 h-4' : 'w-4 h-4'}`"
          />
        Позвонить мне</button>
    </div>
    <div v-if="statusService" class="inline-flex flex-col gap-2">
      <span>Спасибо за вашу заявку!</span>
      <i>Номер вашей заявки: <span class="font-bold">{{numberBind}}</span></i>
      <span>Мы свяжемся с вами в ближайшее время</span>
      
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
  @Prop({ type: Boolean, default: false }) statusService;
  @Prop({ type: String, default: '' }) numberBind;

  get faTelegram() {
    return faTelegramPlane;
  }
  get faWhatsapp() {
    return faWhatsapp;
  }
  phone = "";
  name = "";
  validation = true;
  viewAnimation = false;

  @Watch("phone")
  validatePhone() {
    const re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    this.validation = re.test(this.phone);

 
  }


  sendData() {
    console.log(this.phone);
    this.viewAnimation = true;
    window.$nuxt.$emit("sendData", {phone: this.phone, name: this.name, price: this.price});
  }

  buttonActive = false;
  callFrom = false;

  clickButton() {
    console.log("click");
  }
}
</script>