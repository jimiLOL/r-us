<template>
  <div
    :class="[
      'flex',
      $device.isMobile ? 'flex-col mb-6' : 'flex-row',
      'justify-center',
      'gap-6',
      'px-4',
    ]"
  >
    <div :class="[$device.isMobile ? '' : 'w-3/10 pt-20', 'basis-3/10']">
      <nav>
        <ul class="text-bold text-center whitespace-nowrap">
          <li class="py-4">Захоронение</li>
          <li class="py-4">Место на кладбище</li>
          <li class="py-4">Груз 200</li>
          <li class="py-4">Кремация</li>
        </ul>
      </nav>
    </div>
    <div class="flex flex-col gap-4 pt-20 w-full">
      <div class="flex img_cover h-96 rounded-lg">
        <h1
          class="
            text-wraper text-bold text-3xl
            self-end
            p-4
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-theme-1
            to-theme-8
            backdrop-opacity-60 backdrop-invert
          "
        >
          Название статьи
        </h1>
      </div>
      <div class="flex gap-3 text-normal text-theme-1">
        <NuxtLink to="/" class="text-wraper">Главная</NuxtLink>
        <ChevronRightIcon />
        <NuxtLink to="/" class="text-wraper">Статьи</NuxtLink>
        <ChevronRightIcon />
        <NuxtLink to="/" class="text-wraper text-theme-4"
          >Название статеи</NuxtLink
        >
      </div>
      <p>
        Текст вставлен для примера оформления. Ряд передовых стран к 2022 году
        полностью отказались от создания кладбищ и перешли на кремацию, считая
        ее более прогрессивной (прежде всего речь идет об азиатских
        государствах, практикующих рациональное использование свободных
        территорий). В России востребованность услуг крематориев уже достаточно
        высока и продолжает расти. Люди еще при жизни изъявляют желание
        посмертно предать свое тело огню, ведь эта традиция не является чем-то
        новым для нашей культуры
      </p>
      <h2 class="text-bold text-3xl">Цены на ритуальные услуги под ключ</h2>
      <div
        :class="[
          'flex',
          'gap-2',
          'border-2',
          'rounded-lg',
          'border-theme-1',
          'border-solid',
          'p-4',
        ]"
      >
        <div :class="['flex', 'flex-col', 'gap-2', 'w-full']">
          <span class="text-bold text-3xl text-theme-1">Кремация</span>
          <ul class="leading-snug">
            <li>
              <font-awesome-icon
                icon="circle-dot"
                transform="shrink-6"
                class="self-center hover:animate-ping w-4 shrank-0"
                :style="{ color: '#FFBB30' }"
              />Омовение
            </li>
            <li>
              <font-awesome-icon
                icon="circle-dot"
                transform="shrink-6"
                class="self-center hover:animate-ping w-4 shrank-0"
                :style="{ color: '#FFBB30' }"
              />Транспортировка тела
            </li>
            <li>
              <font-awesome-icon
                icon="circle-dot"
                transform="shrink-6"
                class="self-center hover:animate-ping w-4 shrank-0"
                :style="{ color: '#FFBB30' }"
              />Ваза
            </li>
          </ul>
          <div class="flex self-center gap-4">
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
            <div class="flex gap-2">
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
          >от 10 000 ₽</span
        >
      </div>
      <p>
        Текст вставлен для примера оформления. Ряд передовых стран к 2022 году
        полностью отказались от создания кладбищ и перешли на кремацию, считая
        ее более прогрессивной (прежде всего речь идет об азиатских
        государствах, практикующих рациональное использование свободных
        территорий). В России востребованность услуг крематориев уже достаточно
        высока и продолжает расти. Люди еще при жизни изъявляют желание
        посмертно предать свое тело огню, ведь эта традиция не является чем-то
        новым для нашей культуры
      </p>
      <CtaGeneral />
      <p>
        Как происходит кремация В назначенное время родные и близкие являются в
        траурный зал крематория, где прощаются с умершим. После этого гроб
        закрывают и перемещают на специальном катафалке за ширму. Происходит
        регистрация останков, на крышку помещают металлическую бирку с номером
        (именно по ней потом определяют имя покойного). В кремационной камере
        гроб с телом подвергается воздействию струй раскаленного воздуха до
        полного сгорания. Прах фильтруют от различных примесей и помещают в
        измельчитель, достав из него бирку. Обычно вся процедура занимает около
        получаса-часа. На последнем этапе прах вкладывают в капсулу и производят
        запаивание. Урну можно забрать на следующий день или через какое-то
        время, когда будет принято окончательное решение о том, где похоронить
        ее.
      </p>
      <p>
        Как происходит кремация В назначенное время родные и близкие являются в
        траурный зал крематория, где прощаются с умершим. После этого гроб
        закрывают и перемещают на специальном катафалке за ширму. Происходит
        регистрация останков, на крышку помещают металлическую бирку с номером
        (именно по ней потом определяют имя покойного). В кремационной камере
        гроб с телом подвергается воздействию струй раскаленного воздуха до
        полного сгорания. Прах фильтруют от различных примесей и помещают в
        измельчитель, достав из него бирку. Обычно вся процедура занимает около
        получаса-часа. На последнем этапе прах вкладывают в капсулу и производят
        запаивание. Урну можно забрать на следующий день или через какое-то
        время, когда будет принято окончательное решение о том, где похоронить
        ее.
      </p>
      <p>
        Как происходит кремация В назначенное время родные и близкие являются в
        траурный зал крематория, где прощаются с умершим. После этого гроб
        закрывают и перемещают на специальном катафалке за ширму. Происходит
        регистрация останков, на крышку помещают металлическую бирку с номером
        (именно по ней потом определяют имя покойного). В кремационной камере
        гроб с телом подвергается воздействию струй раскаленного воздуха до
        полного сгорания. Прах фильтруют от различных примесей и помещают в
        измельчитель, достав из него бирку. Обычно вся процедура занимает около
        получаса-часа. На последнем этапе прах вкладывают в капсулу и производят
        запаивание. Урну можно забрать на следующий день или через какое-то
        время, когда будет принято окончательное решение о том, где похоронить
        ее.
      </p>
      <CtaGeneral />
    </div>
  </div>
</template>



<script>
import { Vue, Component } from "vue-property-decorator";
import CtaGeneral from "~/shared/ctaGeneral.vue";

@Component({
  components: { CtaGeneral },
})
export default class ServicesPost extends Vue {}
</script>


<style>
.img_cover {
  background: url("@/assets/imgs/adc18ee630267632260296245d34c3b6.jpg") 50% 100% /
    cover no-repeat;
  filter: contrast(70%);
}
.text-wraper {
  text-shadow: 0 0 0.6px #000000, 0 0 0.5px #d1dc0d;
}
</style>