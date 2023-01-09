<template>
  <div
    :class="[
      'flex',
      $device.isMobile ? 'flex-col' : 'flex-row',
      'justify-center',
      'gap-6',
      'px-4',
    ]"
  >
  <MenuForPost v-if="!$device.isMobile || mobileMenuOpen" category_en="all" direction="services" />
  <PriceBlock class="w-full mb-14" />
  </div>
</template>



<script>
import { Vue, Component } from "vue-property-decorator";
import PriceBlock from "~/components/home/priceBlock.vue";
import MenuForPost from "~/components/menu_for_post/Main.vue";

@Component({
  components: { PriceBlock, MenuForPost },
})
export default class Price extends Vue {
  mobileMenuOpen = false;

  mounted() {
   window.$nuxt.$on("switchMobileMenu", (data) => {
    console.log(data);
      this.mobileMenuOpen = data;
    }); 
  }

}
</script>
