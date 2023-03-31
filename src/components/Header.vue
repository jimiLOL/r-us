<template>
  <div v-if="!$device.isMobile" ref="clientHeight" :class="['pt-4', $route.fullPath == '/' && !$device.isMobile ? 'h-screen':'']">
    <div
      v-if="enable"
      class="flex justify-around gap-x-2 font-raleway flex-nowrap"
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
          <strong class="text-theme-10">Круглосуточно</strong></span
        >
        <a href="tel:+73522610630" class="font-bold text-2xl"
          >+7 (3522) 610‒630</a
        >
      </div>
      <div
        class="
          inline-flex
          flex-col
          justify-center
          whitespace-nowrap
          text-center
        "
      >
        <address
          class="text-lg font-semibold md:text-base text-theme-10 text-shadow"
        >
          пр-кт Машиностроителей, 34
        </address>
        <a class="font-thin" href="tel:+73522256075">+7 (3522) 25‒60‒75</a>
        <span class="font-thin">с 08:00 до 17:00</span>
      </div>
      <div
        class="
          inline-flex
          flex-col
          justify-center
          whitespace-nowrap
          text-center
        "
      >
        <address
          class="text-lg font-semibold md:text-base text-theme-10 text-shadow"
        >
          ул.Коли Мяготина 102а
        </address>
        <a class="font-thin" href="tel:+73522256075">+7 (3522) 622‒000</a>
        <span class="font-thin">с 08:00 до 17:00</span>
      </div>
      <div
        class="
          inline-flex
          flex-col
          justify-center
          whitespace-nowrap
          text-center
        "
      >
        <address
          class="text-lg font-semibold md:text-base text-theme-10 text-shadow"
        >
          ул.Томина, 67
        </address>
        <a class="font-thin" href="tel:+79128355992">+7 (912) 835‒59‒92</a>
        <span class="font-thin">с 08:00 до 17:00</span>
      </div>
      <div
        class="
          inline-flex
          flex-col
          justify-center
          whitespace-nowrap
          text-center
        "
      >
        <address
          class="text-lg font-semibold md:text-base text-theme-10 text-shadow"
        >
          ул.Карбышева 35к5
        </address>
        <a class="font-thin" href="tel:+73522554400">+7 (3522) 554‒400 </a>
        <!-- <span> +7 (3522) 555‒332</span> -->
        <span class="font-thin">с 08:00 до 17:00</span>
      </div>
      <div
        class="
          inline-flex
          flex-col
          justify-center
          whitespace-nowrap
          text-center
        "
      >
        <address
          class="text-lg font-semibold md:text-base text-theme-10 text-shadow"
        >
          с.Кетово, ул.Космонавтов, 36 оф 9
        </address>
        <a class="font-thin" href="tel:+79129730848">+7 (912) 973-08-48 </a>
        <!-- <span> +7 (3522) 555‒332</span> -->
        <span class="font-thin">с 08:00 до 17:00</span>
      </div>
    </div>
    <div class="line mt-2 justify-self-center"></div>
    <div>
      <NavMenu :dataMenu="dataMenuLeft" />
    </div>
    <Hover
      v-if="hoverEnable"
      :clientHeight="{ clientHeightWindow: clientHeightComputed, clientHeight: 600 }"
    />
  </div>
  <div class="pb-4 flex flex-col text-black" :class="[$device.isMobile && $route.fullPath == '/'?'text-theme-2':'']" v-else>
    <div class="flex flex-nowrap justify-between content-center gap-2">
      <NuxtLink to="/" class="flex items-center mt-2">
        <img
          :src="require('@/assets/imgs/logo.png')"
          class="w-14"
          alt="Ритуальная служба Кургана"
        />
      </NuxtLink>
      <a
        href="tel:+73522610630"
        class="font-bold text-xl align-baseline self-center"
        >+7 (3522) 610‒630</a
      >
      <HamburgerMenu class="w-14" />
    </div>
    <div>
      <NavMenu v-if="mobileMenuOpen" :dataMenu="dataMenuLeft" />
    </div>
    <div v-if="$route.fullPath == '/'" class="flex flex-col gap-6 mt-9" :class="[$device.isMobile ? 'text-theme-2':'']">
      <div class="flex flex-col gap-6">
        <h1 class="text-2xl font-bold">
          <i>Ритуальная служба в</i><i class="text-theme-10"> Кургане</i>
        </h1>
        <p>
          Мы - команда опытных и надежных ритуальных агентов в Кургане. Наша специализация - предоставление качественных ритуальных услуг, включая организацию похорон, кремацию и транспортировку тел.
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
          <strong class="text-theme-10">Круглосуточно</strong></span
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
            bg-gradient-to-t
            from-bt-2
            to-bt-1
            px-12
            py-4
            rounded-lg
            font-bold
            focus:bg-theme-10 focus:transform focus:scale-95 focus:underline
          "
          @click="callMe"
        >
          Заказать звонок
        </button>
        <button
          class="
            transition
            ease-in
            duration-1500
            transform
            bg-gradient-to-t
            from-bt-2
            to-bt-1
            px-12
            py-4
            rounded-lg
            font-bold
            focus:bg-theme-10 focus:transform focus:scale-95 focus:underline
          "
          @click="openModal"
        >
          Рассчитать стоимость похорон
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
  @Prop({ type: Number, required: true }) clientHeight;



  get clientHeightComputed() {
    return this.clientHeight;
  }


  // @Watch("$route.fullPath")
  // newclientHeight() {
  //   setTimeout(() => {
  //     window.$nuxt.$emit("changePage");
  //   }, 500);
  //   setTimeout(() => {
  //     if (this.$refs.clientHeight.clientHeight) {
  //       console.log(this.$refs.clientHeight.clientHeight);
  //       this.clientHeight =
  //         this.$refs.clientHeight.clientHeight -
  //         this.$refs.clientHeight.clientHeight * 0.14;
  //       // this.clientHeight = window.innerHeight;
  //     } else {
  //       console.log(window.innerHeight);
  //       this.clientHeight = window.innerHeight;
  //     }
  //   }, 2000);
  // }

  mobileMenuOpen = false;

  // clientHeight = window.innerHeight;

  dataMenuLeft = dataMenuLeft;
  openModal() {
    window.$nuxt.$emit("switchModal", true);
  }
  callMe() {
    window.$nuxt.$emit("callMe", true);
  }

  mounted() {
    window.$nuxt.$on("switchMobileMenu", (data) => {
      this.mobileMenuOpen = data;
    });
    // console.log(this.clientHeight);

    if (!this.$device.isMobile) {
      // this.clientHeight =
      //   this.$refs.clientHeight.clientHeight -
      //   this.$refs.clientHeight.clientHeight * 0.34;

      // setTimeout(() => {
      //   this.clientHeight = this.$refs.clientHeight.clientHeight;
      // }, 1500);

      // this.$nuxt.$on("resize", () => {
      //   if (this.$refs.clientHeight.clientHeight) {
      //     setTimeout(() => {
      //       console.log(this.$refs.clientHeight.clientHeight);
      //     this.clientHeight = this.$refs.clientHeight.clientHeight;

      //     }, 1500);
      //   }
      //   // this.clientHeight = this.$refs.clientHeight.clientHeight;
      // });
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
