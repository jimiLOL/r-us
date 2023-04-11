<template>
  <div class="flex flex-col gap-6 my-4">
    <div>
      <h4 class="text-3xl">Как мы работаем?</h4>
    </div>
    <div class="flex justify-around gap-3 flex-wrap">
    <div class="inline-flex items-center gap-2 basis cursor-default">
        <span
          class="bg-theme-13 border-2 border-black rounded-full w-24 h-9 text-center py-2 text-white text-md font-bold hover:bg-theme-6"
        >
          Этап 1
        </span>
        <div class="w-64">
          Вы можете оставить заявку или связаться с нами по <a href="tel:+73522610630" class="text-theme-12">телефону</a>, чтобы
          заказать услуги похоронного агентства.
        </div>
      </div>
      <div class="inline-flex items-center gap-2 basis cursor-default">
        <span
          class="bg-theme-13 border-2 border-black rounded-full w-24 h-9 text-center py-2 text-white text-md font-bold hover:bg-theme-6"
        >
          Этап 2
        </span>
        <div class="w-64">
          Наш представитель приедет к вам и поможет оформить все необходимые документы для организации похорон.
        </div>
      </div>
      <div class="inline-flex items-center gap-2 basis cursor-default">
        <span
          class="bg-theme-13 border-2 border-black rounded-full w-24 h-9 text-center py-2 text-white text-md font-bold hover:bg-theme-6"
        >
          Этап 3
        </span>
        <div class="w-64">
         Мы заботимся о том, чтобы покойный был подготовлен к достойному прощанию.
        </div>
      </div>
      <div class="inline-flex items-center gap-2 basis cursor-default">
        <span
          class="bg-theme-13 border-2 border-black rounded-full w-24 h-9 text-center py-2 text-white text-md font-bold hover:bg-theme-6"
        >
          Этап 4
        </span>
        <div class="w-64">
         В нашем ассортименте есть все необходимое для проведения похоронных церемоний.
        </div>
      </div>
      <div class="inline-flex items-center gap-2 basis cursor-default self-center">
        <span
          class="bg-theme-13 border-2 border-black rounded-full w-24 h-9 text-center py-2 text-white text-md font-bold hover:bg-theme-6"
        >
          Этап 5
        </span>
        <p class="w-64">
         Мы предоставим вам полный пакет документов и организуем перевозку покойного.
        </p>
      </div>
     

      
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
// import { TweenMax, Power2, gsap } from "gsap";

@Component({})
export default class HowWeWork extends Vue {
  mounted() {
    // var icon = document.querySelector(".el-image path");
    // console.log(icon);
    //     setTimeout(() => {
    //       TweenMax.to(icon, 2, {
    //       strokeDashoffset: 0,
    //       ease: Power2.easeOut,
    //     });
    //     }, 4000);
    //     gsap.set(".el-image", {
    //   drawSVG:"50% 50%",
    // })
    // gsap.to(".el-image", {
    //   duration: 8,
    //   drawSVG: "0% 100%"
    // });
  }
}
</script>