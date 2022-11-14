<template>
  <div ref="block" class="grid grid-cols-2 grid-rows-1 gap-4 w-full">
    <div class="row-span-1 flex flex-col gap-6 w-full pt-20 pb-24">
      <div class="flex flex-col gap-8">
        <h1 class="text-6xl font-bold">
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
      <div class="flex gap-6 text-theme-8">
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
            hover:bg-theme-10 hover:transform hover:scale-95 hover:underline
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
            hover:bg-theme-10 hover:transform hover:scale-95 hover:underline
          "
        >
          Расчитать стоимость похорон
        </button>
      </div>
    </div>
    <div class="row-span-2 flex justify-center h-screen img-cross">
      <div class="img-position max-w-full"></div>
      <!-- <img src="/line.svg" class="w-max-96 line" alt="" /> -->
    </div>
    <a v-if="load" href="#main"><SVGMouse class="mouse"/></a>
    
    <component :is="'style'"> :root {--clientHeight: {{clientHeight}}px; } </component>

   
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import SVGMouse from "~/components/svg/Mouse.vue"

@Component({
  components: {SVGMouse}
})
export default class Hover extends Vue {
  @Prop({type: Number, default: 700}) clientHeight;
  // clientHeight = null;
  load = false;

  
  mounted() {
    // this.clientHeight = this.$refs.block.clientHeight;
    this.load = true;
    
   console.log(this.$refs.block.clientHeight); 
   this.$nuxt.$emit('resize')
  }
}
</script>


<style scoped>
.img-position {
  /* position: absolute; */
  /* top: 75%; */
  /* height: 300px; */
  width: 100%;
  /* background-position: center 200px center 200px; */
  /* rotate: 10deg; */
  /* background-size: 100%; */
  /* background-repeat: no-repeat; */
  /* background-position: bottom; */
  background: url("@/assets/imgs/dfeb34bf463d75ac4852b0cfbc3f8069.png") -50% 70%/80%
      no-repeat,
    url("@/assets/imgs/86098fe20e6936fa3330334defb88880.png") 70% 70%/ 80% no-repeat;
  /* background-position: center center;
  
  background-repeat: no-repeat; */
  /* background-size: cover; */

  /* border-radius: 25% 75% / 50%; */
}
.img-cross {
  /* background-size: 40%; */
  /* background-repeat: no-repeat; */
  /* background-position: top; */

  /* background-image: radial-gradient(#d6bc2038, 20%, #0d080505); */
  background: url("@/assets/imgs/8491cdc37604857fc9872dbc4cd25f73.png") 30% 0%/40%
      no-repeat,
    radial-gradient(farthest-corner at 40% 40%, #d6bc2000, 20%, #0a161e00);
}
.line {
  position: absolute;
  top: 30%;
  right: 0;
  max-height: 50%;
}
.mouse {
  position: absolute;
  width: 5%;
  height: 5%;
  top: var(--clientHeight);
  right: 50%;
   /* background: url("/mouse.svg") 50% 95%/1.3%
      no-repeat; */

}
</style>