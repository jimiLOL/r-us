<template>
     <div class="flex img_cover h-96 rounded-lg">
        <h1
          style="color: #fff"
          class="text-wraper text-bold text-3xl self-end text-theme-2 p-4 bg-clip-text bg-gradient-to-r from-theme-1 to-theme-8 backdrop-opacity-60 backdrop-invert"
        >
          {{ post?.title }}
        </h1>
          <component :is="'style'">
          :root { --url: url("https://drive.google.com/uc?export=view&id={{
            post?.picterUrl || "1SRUqTLDdfMfFOWdes-EFCtsPZbEsG7TU"
          }}")}
        </component>
      </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
 

@Component({})
export default class HoverForPost extends Vue {
    @Prop({ type: Object, default: () => ({title: 'Загрузка', picterUrl: '1SRUqTLDdfMfFOWdes-EFCtsPZbEsG7TU'}) }) post!: any;
}
</script>

<style>
.img_cover {
  background: var(--url) 50% 100% / cover no-repeat;
  /* filter: brightness(50%); */

  /* background-blend-mode: multiply; */
}
.text-wraper {
  text-shadow: #FC0 1px 0 10px;

}
h1 {
  filter: none;
}
</style>