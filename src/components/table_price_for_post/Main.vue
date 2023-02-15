<template>
  <div>
    <div
      :class="[
        $device.isMobile ? 'text-center' : '',
        'text-bold',
        'text-3xl',
        'my-2',
      ]"
    >
      Цены на ритуальные услуги под ключ
    </div>

    <div
      :class="[
        'flex',
        $device.isMobile ? 'flex-col text-center' : 'flex-row',
        'gap-2',
        'border-2',
        'rounded-lg',
        'border-theme-1',
        'border-solid',
        'img-hover-zoom--brightness',
        'p-4',
      ]"
    >
      <div :class="['flex', 'flex-col', 'gap-2', 'w-full']">
        <span class="text-bold text-3xl text-theme-10 text-shadow">{{
          post?.category
        }}</span>
        <ul class="leading-snug text-white">
          <li
            class="flex gap-1"
            v-for="(item, index) in post?.items"
            :key="index"
          >
            <font-awesome-icon
              icon="circle-dot"
              transform="shrink-6"
              class="self-center hover:animate-ping w-4 shrank-0"
              :style="{ color: '#FFBB30' }"
            />{{ item.title }}
          </li>
        </ul>
        <div
          :class="[
            'flex',
            $device.isMobile ? 'flex-col' : 'flex-row self-center gap-4',
          ]"
        >
          <div
            class="
              inline-flex
              flex-col
              justify-center
              flex-nowrap
              text-base text-white
              xl:whitespace-nowrap
            "
          >
            <span
              >Горячая линия -
              <strong class="text-theme-10 text-shadow"
                >Круглосуточно</strong
              ></span
            >
            <a href="tel:+73522610630" class="font-bold">+7 (3522) 610‒630</a>
          </div>
          <div :class="['flex', $device.isMobile ? 'flex-col gap-1' : 'gap-2']">
            <button
              :class="[
                'py-2',
                'px-9',
                'rounded-md',
                'text-theme-8',
                'text-bold',
                'bg-gradient-to-t',
                'from-bt-2',
                'to-bt-1',
                'transform transition ease-in duration-1500',
                'hover:bg-theme-10',
                'hover:transform',
                'hover:scale-95',
                'hover:underline',
                'focus:bg-theme-10',
                'focus:scale-95',
                'focus:underline',
                $device.isMobile ? 'w-full' : '',
              ]"
              @click="callMe"
            >
              Заказать звонок
            </button>
            <button
              :class="[
                'py-2',
                'px-9',
                'rounded-md',
                'text-theme-8',
                'text-bold',
                'bg-gradient-to-t',
                'from-bt-2',
                'to-bt-1',
                'transform transition ease-in duration-1500',
                'hover:bg-theme-10',
                'hover:scale-95',
                'hover:underline',

                $device.isMobile ? 'w-full' : '',
              ]"
              @click="openModal"
            >
              Расчитать стоимость похорон
            </button>
          </div>
        </div>
      </div>
      <span
        class="
          text-bold text-xl text-theme-10
          justify-self-end
          self-start
          whitespace-nowrap
        "
        :class="[$device.isMobile ? 'self-center' : '', 'text-shadow']"
        >от 10 000 ₽</span
      >
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TablePriceforpost extends Vue {
  @Prop({ type: Object, default: () => ({ category: "Тайтл", items: [] }) })
  post!: any;
  openModal() {
    window.$nuxt.$emit("switchModal", true);
  }
  callMe() {
    window.$nuxt.$emit("callMe", true);
  }
}
</script>

<style scoped>
.img-hover-zoom--brightness {
  background-size: cover;
  /* background-repeat: no-repeat;
  background-position: center center; */
  background: url("/imgs/lp02bi_94766ea5f97792e4672f66037d2c8269841b788f.jpg")
      20% 38%/100% no-repeat,
    radial-gradient(closest-side, transparent 10%, #00000061 75%);
  background-blend-mode: multiply;
  /* background-filter: blur(15px); */
  /* 
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  -o-filter: blur(1px);
  -ms-filter: blur(1px);
  filter: blur(1px); */
}
</style>