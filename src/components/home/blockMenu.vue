<template>
  <div
    id="main"
    :class="[
      'flex',
      'flex-col',
      'items-center',
      'mb-20',
      $device.isMobile ? 'pt-9' : 'pt-6',
    ]"
  >
    <NuxtLink to="/chto_delat_posle_smerti_cheloveka"
      ><h2
        :class="[
          'inline-flex',
          $device.isMobile ? 'text-2xl' : 'text-5xl',
          'font-bold',
          'hover:underline hover:text-theme-10',
          'focus:text-theme-10 focus:underline',
        ]"
      >
        Что делать после смерти человека
        <font-awesome-icon
          icon="arrow-right"
          transform="shrink-6"
          class="self-center hover:animate-ping w-14"
          :style="{ color: '#FFBB30' }"
        />
      </h2>
    </NuxtLink>

    <div
      :class="[
        'grid',
        $device.isMobile
          ? 'grid-rows-6 grid-cols-1'
          : 'grid-rows-2 grid-cols-3',
        'gap-4',
        'w-full',
        'mt-10',
        'h-max',
      ]"
    >
      <NuxtLink to="/">
        <div
          class="
            flex flex-col
            items-center
            align-baseline
            border-2
            rounded-lg
            border-theme-1 border-solid
            hover:border-theme-2 hover:rounded-md
            hover:transform hover:scale-95 hover:underline
            gap-4
            p-8
            h-80
            cursor-pointer
            text-center
          "
        >
          <!-- <div class="cross w-full h-36">
            
        </div> -->
          <img src="/cross/Group.svg" alt="" />

          <span>Захоронение</span>
          <p>
            Помощь в подготовке похорон в Кургане и Курганской области.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/mesto_na_kladbishche">
        <div
          class="
            flex flex-col
            items-center
            align-baseline
            border-2
            rounded-lg
            border-theme-1 border-solid
            hover:border-theme-2 hover:rounded-md
            hover:transform hover:scale-95 hover:underline
            gap-4
            p-8
            h-80
            cursor-pointer
            text-center
          "
        >
          <!-- <div class="cross w-full h-36">
            
        </div> -->
          <img src="/plate/Union.svg" alt="" />
          <span>Место на кладбище</span>
          <p>
           Вспомнить и попрощаться: выбор места на кладбище.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/gruz_200">
        <div
          class="
            flex flex-col
            items-center
            align-baseline
            border-2
            rounded-lg
            border-theme-1 border-solid
            hover:border-theme-2 hover:rounded-md
            hover:transform hover:scale-95 hover:underline
            gap-4
            p-8
            h-80
            cursor-pointer
            text-center
          "
        >
          <img src="/grob/grob.svg" alt="" />

          <span>Груз 200</span>
          <p>
            Помощь в организация транспортировки.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/kremaciya">
        <div
          class="
            flex flex-col
            items-center
            align-baseline
            border-2
            rounded-lg
            border-theme-1 border-solid
            hover:border-theme-2 hover:rounded-md
            hover:transform hover:scale-115 hover:underline
            gap-4
            p-8
            h-80
            cursor-pointer
            text-center
          "
        >
          <img src="/creamation/Vector.svg" alt="" />

          <span>Кремация</span>
          <p>
            Организация процесса кремации.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/">
        <div
          class="
            flex flex-col
            items-center
            align-baseline
            border-2
            rounded-lg
            border-theme-1 border-solid
            hover:border-theme-2 hover:rounded-md
            hover:transform hover:scale-95 hover:underline
            gap-4
            p-8
            h-80
            cursor-pointer
            text-center
          "
          @click="openModal"
        >
          <img src="/calculation/Vector.svg" alt="" />

          <span>Посчитать стоимость похорон</span>
          <p>
            Выберите индивидуальные услуги и узнайте стоимость.
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/">
        <div
          class="
             flex flex-col
            items-center
            align-baseline
            border-2
            rounded-lg
            border-theme-1 border-solid
            hover:border-theme-2 hover:rounded-md
            hover:transform hover:scale-95 hover:underline
            gap-4
            p-8
            cursor-pointer
            h-80
            text-center
          "
          @click="scrollToElement"
        >
          <img src="/proof/proof.svg" alt="" />

          <span>Ритуальные услуги под ключ</span>
          <p>
            Полный спектр услуг по организации похорон.
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>



<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class BlockMenu extends Vue {
  openModal() {
    window.$nuxt.$emit("switchModal", true);
  }
  scrollToElement() {
     window.scrollTo({
          top: document.getElementById("priceList").offsetTop,
          left: 0,
          behavior: "smooth",
        });
  }
}
</script>

<style scoped>
.cross {
  background: url("/cross/vector_2.svg") 50% 100%/69px 84px no-repeat,
    url("/cross/vector_1.svg") 40% 50%/54px 91px no-repeat,
    url("/cross/vector_3.svg") 60% 50%/54px 91px no-repeat;
}
</style>