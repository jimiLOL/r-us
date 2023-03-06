<template>
  <nav class="border-gray-200 dark:border-gray-600" id="main-nav">
    <div
      class="
        flex flex-nowrap
        items-center
        mx-auto
        max-w-screen-xl
        px-4
        md:px-6
        py-2.5
      "
    >
      <NuxtLink v-if="!$device.isMobile" to="/" class="flex items-center">
        <img
          :src="require('@/assets/imgs/logo.png')"
          class="w-24"
          alt="Ритуальная служба Кургана"
        />
      </NuxtLink>

      <div
        id="mega-menu-full"
        :class="[
          $device.isMobile ? '' : 'ml-24',
          'justify-between',
          'items-center',
          'w-full',
          'text-base',
          'md:flex',
          'md:w-auto',
          'md:order-1',
        ]"
      >
        <ul
          class="
            flex flex-col
            justify-items-center
            gap-11
            mt-4
            rounded-lg
            border border-gray-100
            md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0
            dark:border-gray-700
          "
        >
            <NuxtLink
              v-for="(item, index) in dataMenu"
              :key="index"
              :to="item.url"
              :exact="true"
            >
              <li
                aria-haspopup="true"
                aria-expanded="false"
                class="
                  block
                  py-2
                  px-2
                  rounded
                  text-shadow
                  hover
                   md:p-0
                  dark:border-gray-700
                  text-center
                  font-bold
                "
              >
                {{ item.title }}
              </li>
            </NuxtLink>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class NavMenu extends Vue {
  @Prop({ type: Array, default: () => [] }) dataMenu;

  // dataMenu = dataMenu;
  OpenOrClose() {
    // this.$refs.mega-menu
  }
  mounted() {
  
  }
}
</script>
 

 <style scoped>
.sticky {
  position: sticky !important;
  top: 0 !important;
  z-index: 999 !important;
  background-color: white !important;
  width: 100% !important;
  transition: all 0.3s ease-in-out !important;
}


 </style>