<template>
  <div class="flex gap-3 text-normal text-theme-1">
    <NuxtLink to="/" class="text-wraper">Главная</NuxtLink>
    <ChevronRightIcon />
    <NuxtLink to="/services" class="text-wraper">Услуги</NuxtLink>
    <ChevronRightIcon />
    <NuxtLink :to="`/services/${category_en}`" class="text-wraper">{{
      category
    }}</NuxtLink>
    <ChevronRightIcon />
    <NuxtLink
      :to="{
        path: `/services/${category_en}`,
      }"
      class="text-wraper text-theme-4 truncate"
      >{{ title }}</NuxtLink
    >
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Pagination extends Vue {
  @Prop({ type: String, required: true }) category_en!: string;
  @Prop({ type: String, required: true }) category!: string;
  @Prop({ type: String, required: true }) title!: string;
}
</script>
