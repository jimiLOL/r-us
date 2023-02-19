<template>
 <div class="flex gap-3 text-normal text-black font-bold">
        <NuxtLink to="/" class="hover:underline">Главная</NuxtLink>
        <ChevronRightIcon />
        <NuxtLink :to="`/${direction}`" class="hover:underline ">{{post?.direction == 'blog'?'Блог': 'Услуги'}}</NuxtLink>
        <ChevronRightIcon />
        <NuxtLink :to="`/${direction}/${post?.category_en}`" class="hover:underline truncate">{{
          post?.category
        }}</NuxtLink>
        <ChevronRightIcon />
        <NuxtLink
          :to="{
            path: `/${direction}/${post?.category_en}`,
            query: { post: post?.title_en },
          }"
          class="text-theme-17 truncate"
          >{{ post?.title }}</NuxtLink
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
  @Prop({type: Object, required: true}) post!: any;
  @Prop({type: String, required: true}) direction!: string;
}
</script>
