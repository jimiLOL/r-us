<template>
  <div>
     

    <div
      :class="[
        'flex',
        $device.isMobile ? 'flex-col text-center' : 'flex-row',
        'gap-2',
        'border-2',
        'rounded-lg',
        'border-theme-1',
        'border-solid',
          $device.isMobile
            ? 'img-hover-zoom--mobile'
            : 'img-hover-zoom--desktop',
        'p-4',
      ]"
    >
      <div :class="['flex', 'flex-col', 'gap-2', 'w-full']">
        <span class="text-bold text-3xl text-theme-10 text-shadow">{{
         post?.title_price || post?.title
        }}</span>
        <ul role="list" class="flex flex-col gap-1 sm:gap-2 md:gap-2 leading-snug text-white cursor-default text-left"
        :class="[$device.isMobile ? 'items-center justify-center ' : 'items-start justify-start']"
        >
          <li
            class="self-start inline-flex gap-1 cursor-default justify-start text-left"
            v-for="(item, index) in post?.items"
            :key="index"
          >
            <font-awesome-icon
              icon="circle-dot"
              class="self-center hover:animate-ping list-icon"
              :style="{ color: '#FFBB30' }"
            /><span>{{ item.title }}</span>
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
                'px-9',
                'whitespace-nowrap',
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
                $device.isMobile ? 'w-full py-4' : 'py-2',
              ]"
              @click="callMe"
            >
              Заказать звонок
            </button>
            <button
              :class="[
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
                !$device.isMobile ? 'w-full py-2' : 'py-4 whitespace-nowrap',
              ]"
              @click="openModal"
            >
              Рассчитать стоимость похорон
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
          cursor-default
        "
        :class="[$device.isMobile ? 'self-center' : 'text-bold text-3xl text-theme-10 text-shadow',]"
        >{{post?.price || 'от 10 000 ₽'}}</span
      >
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TablePriceforpost extends Vue {
  @Prop({ type: Object, default: () => ({ category: "Ритуальные услуги", items: [{title: 'Поминальный обед'}, {title: 'Омовение'}, {title: 'Ваза'}] }) })
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
.list-icon {
  width: 9px;
  max-width: 9px;
  min-width: 9px;
}
.img-hover-zoom--desktop {
  background-size: cover;
  background: url("/imgs/lp02bi_94766ea5f97792e4672f66037d2c8269841b788f.jpg")
      20% 38%/100% no-repeat,
    radial-gradient(closest-side, transparent 10%, #00000061 75%);
  background-blend-mode: multiply;
}

.img-hover-zoom--mobile {
  background-size: cover;
  background: url("/imgs/lp02bi_94766ea5f97792e4672f66037d2c8269841b788f.jpg")
      70% 38%/400% no-repeat,
    radial-gradient(closest-side, transparent 10%, #00000061 75%);
  background-blend-mode: multiply;
}

</style>