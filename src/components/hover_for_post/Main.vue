<template>
     <div class="flex img_cover h-96 rounded-lg">
        <h1
          style="color: #fff"
          :class="[
            load
              ? 'animate-pulse h-2.5 bg-gray-500 rounded-full w-98'
              : 'text-wraper font-bold self-end text-white p-4 bg-clip-text bg-gradient-to-r from-theme-1 to-theme-8',
              $device.isMobile ? 'text-2xl' : 'text-4xl',
          ]"
        >
          {{ load ? "" : post?.title }}
        </h1>
          <component :is="'style'">
          :root { --url: url("https://drive.google.com/uc?export=view&id={{post?.picterUrl}}")}
        </component>
      </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
 

@Component({})
export default class HoverForPost extends Vue {
    @Prop({ type: Object, default: () => ({title: 'Загрузка', picterUrl: '1SRUqTLDdfMfFOWdes-EFCtsPZbEsG7TU'}) }) post!: any;
    @Prop({ type: Boolean, default: true }) load!: boolean;
}
</script>

<style>
.img_cover {
  background: var(--url) 50% 100% / cover no-repeat;
  /* background-image: var(--url); */
  backdrop-filter: blur(7px); 
  overflow: hidden
}
.img_cover::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
  transition: opacity 0.3s ease-in-out;
}
.text-wraper {
  text-shadow: rgb(214, 233, 13) 0.1px 0 0.5px;

}
h1 {
  filter: none;
}
</style>