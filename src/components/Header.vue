<template>
  <div v-if="!$device.isMobile" ref="clientHeight" class="pt-4">
    <div
      v-if="enable"
      class="flex justify-around gap-x-14 font-raleway flex-nowrap"
    >
      <div
        class="
          inline-flex
          flex-col
          justify-center
          flex-nowrap
          xl:whitespace-nowrap
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
      <div class="inline-flex flex-col justify-center whitespace-nowrap">
        <address class="text-lg font-semibold md:text-base">
          пр-кт Машиностроителей, 34
        </address>
        <a class="font-thin" href="tel:+73522256075">+7 (3522) 25‒60‒75</a>
        <span class="font-thin">Ежедневно с 08:00 до 17:00</span>
      </div>
      <div class="inline-flex flex-col justify-center whitespace-nowrap">
        <address class="text-lg font-semibold md:text-base">
          ул. Коли Мяготина 102а
        </address>
        <a class="font-thin" href="tel:+73522256075">+7 (3522) 622‒000</a>
        <span class="font-thin">Ежедневно с 08:00 до 17:00</span>
      </div>
      <div class="inline-flex flex-col justify-center whitespace-nowrap">
        <address class="text-lg font-semibold md:text-base">
          ул. Томина, 67
        </address>
        <a class="font-thin" href="tel:+79128355992">+7‒912‒835‒59‒92</a>
        <span class="font-thin">Ежедневно с 08:00 до 17:00</span>
      </div>
      <div class="inline-flex flex-col justify-center whitespace-nowrap">
        <address class="text-lg font-semibold md:text-base">
          ул. Карбышева 35к5
        </address>
        <a class="font-thin" href="tel:+73522554400">+7 (3522) 554‒400 </a>
        <!-- <span> +7 (3522) 555‒332</span> -->
        <span class="font-thin">Ежедневно с 08:00 до 17:00</span>
      </div>
    </div>
    <div class="line mt-2 justify-self-center"></div>
    <div>
      <NavMenu :dataMenu="dataMenuLeft" />
    </div>
    <Hover
      v-if="hoverEnable"
      :clientHeight="clientHeight - clientHeight * 0.22"
    />
  </div>
  <div class="pb-4" v-else>
    <div class="flex flex-nowrap justify-between content-center gap-2">
      <NuxtLink to="/" class="flex items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/96b7/f68a/9d4964aea26fde815a6d55c29d22041d?Expires=1670198400&Signature=UsBhBSQkY5Wd8C-SNTG4mi8Ew57saGxrA8akQk2TXd3Q~zvF5R6Vkqer31yBAjb1r~xUlIHe7wJDYEQ9mFOOdkOtNfvls6f01FhONLznIzdkZ0OoxoM8xS3NIZeXbIJ4BDzAkE3HkwILAB-WMZo2XLnvpGh5Ms0U2c4XtZ2pcNGoL3HGCjwMHTDvA5ob5Tmww7r7plLjaKhBNsPHh4MlbFg-ea~41SMdR1-xOS8GroDfy0f3NVxXOvT5x55MylDHHFeAtP473E6Olv4nkLf9MbRpVigd554pMS8fE0ev93x3BMiBkK9qNS5sCej~v5W0TnApIVDLj1XAMFhA~fYJYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          class="w-14"
          alt="Flowbite Logo"
        />
      </NuxtLink>
      <a
        href="tel:+73522610630"
        class="font-bold text-xl align-baseline self-center"
        >+7 (3522) 610‒630</a
      >
      <HamburgerMenu class="w-14" />
    </div>
    <div v-if="$route.fullPath == '/'" class="flex flex-col gap-6 mt-9">
      <div class="flex flex-col gap-6">
        <h1 class="text-2xl font-bold">
          <i>Ритуальная служба в</i><i class="text-theme-1"> Кургане</i>
        </h1>
        <p>
          Значимость этих проблем настолько очевидна, что семантический разбор
          внешних противодействий предоставляет широкие возможности для вывода
          текущих активов.
        </p>
      </div>

      <div
        class="
          inline-flex
          flex-col
          justify-center
          flex-nowrap
          xl:whitespace-nowrap
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

      <div class="flex flex-col gap-3 text-theme-8">
        <button
          class="
            transition
            ease-in
            duration-1500
            transform
            bg-theme-9
            px-12
            py-4
            rounded-sm
            font-bold
            focus:bg-theme-10 focus:transform focus:scale-95 focus:underline
          "
        >
          Заказать звонок
        </button>
        <button
          class="
            transition
            ease-in
            duration-1500
            transform
            bg-theme-9
            px-12
            py-4
            rounded-sm
            font-bold
            focus:bg-theme-10 focus:transform focus:scale-95 focus:underline
          "
        >
          Расчитать стоимость похорон
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import NavMenu from "./nav-menu.vue";
import dataMenuLeft from "~/data/MenuLeft";
import Hover from "./Hover.vue";
import HamburgerMenu from "~/shared/humburgerMenu.vue";

@Component({
  components: { NavMenu, Hover, HamburgerMenu },
})
export default class Header extends Vue {
  @Prop({ type: Boolean, required: true }) enable;
  @Prop({ type: Boolean, required: true }) hoverEnable;

  @Watch("this.$route.fullPath")
  newclientHeight() {
    console.log(this.$route.fullPath);
  }
  

  clientHeight = window.innerHeight;

  dataMenuLeft = dataMenuLeft;


  mounted() {
    if (!this.$device.isMobile) {
      this.clientHeight = this.$refs.clientHeight.clientHeight;

      setTimeout(() => {
      this.clientHeight = this.$refs.clientHeight.clientHeight;

        
      }, 1500);

      this.$nuxt.$on("resize", () => {
        this.clientHeight = this.$refs.clientHeight.clientHeight;

      });
    }
  }
}
</script>

<style scoped>
.line {
  width: 95%;
  height: 4px;
  margin-left: 2%;
  border-bottom: 0.2px solid transparent;
  border-image: linear-gradient(
    0.05turn,
    rgb(180, 180, 168),
    rgb(114, 99, 107),
    rgb(101, 92, 92)
  );
  border-image-slice: 1;
}
</style>
