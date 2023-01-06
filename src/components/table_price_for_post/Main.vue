<template>
  <div>
    <div :class="[$device.isMobile ? 'text-center':'', 'text-bold', 'text-3xl', 'my-2']">Цены на ритуальные услуги под ключ</div>

    <div
      :class="[
        'flex',
        $device.isMobile ? 'flex-col text-center' : 'flex-row',
        'gap-2',
        'border-2',
        'rounded-lg',
        'border-theme-1',
        'border-solid',
        'p-4',
      ]"
    >
      <div :class="['flex', 'flex-col', 'gap-2', 'w-full']">
        <span class="text-bold text-3xl text-theme-1">{{
          post?.category
        }}</span>
        <ul class="leading-snug">
          <li 
          v-for="(item, index) in post?.items"
          :key="index"
          >
            <font-awesome-icon
              icon="circle-dot"
              transform="shrink-6"
              class="self-center hover:animate-ping w-4 shrank-0"
              :style="{ color: '#FFBB30' }"
            />{{item.title}}
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
              text-base
              xl:whitespace-nowrap
            "
          >
            <span
              >Горячая линия -
              <strong class="text-theme-1">Круглосуточно</strong></span
            >
            <a href="tel:+73522610630" class="font-bold">+7 (3522) 610‒630</a>
          </div>
          <div :class="['flex', $device.isMobile ? 'flex-col gap-1' : 'gap-2']">
            <button
              :class="[
                'py-2',
                'px-9',
                'border-2',
                'rounded-md',
                'text-theme-8',
                'text-bold',
                'bg-theme-1',
                'border-solid',
                'hover:bg-theme-10',
                'hover:transform',
                'hover:scale-95',
                'hover:underline',
                'focus:bg-theme-10',
                'focus:transform',
                'focus:scale-95',
                'focus:underline',
                $device.isMobile ? 'w-full' : '',
              ]"
            >
              Заказать звонок
            </button>
            <button
              :class="[
                'py-2',
                'px-9',
                'border-2',
                'rounded-md',
                'text-theme-8',
                'text-bold',
                'bg-theme-1',
                'border-solid',
                'hover:bg-theme-10',
                'hover:transform',
                'hover:scale-95',
                'hover:underline',
                'focus:bg-theme-10',
                'focus:transform',
                'focus:scale-95',
                'focus:underline',
                $device.isMobile ? 'w-full' : '',
              ]"
            >
              Расчитать стоимость похорон
            </button>
          </div>
        </div>
      </div>
      <span
        class="
          text-bold text-xl text-theme-11
          justify-self-end
          self-start
          whitespace-nowrap
        "
        :class="[$device.isMobile ? 'self-center' : '']"
        >от 10 000 ₽</span
      >
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TablePriceforpost extends Vue {
  @Prop({ type: Object, default: () => ({ category: "Тайтл", items: [] }) }) post!: any;
}
</script>