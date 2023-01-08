<template>
  <div>
    <div
      :class="[
        'flex',
        $device.isMobile ? 'flex-col gap-4 items-center' : 'justify-between',
        'font-raleway',
        'flex-nowrap',
        'w-full',
      ]"
    >
      <div class="flex flex-col justify-center content-center basis-1/2">
        <h3 :class="['font-bold', 'mb-9', $device.isMobile ? 'self-center text-center text-2xl' : 'text-3xl']">
          Официальное похоронное бюро Кургана
        </h3>
        <div :class="['flex', $device.isMobile ? 'flex-col' : '', 'gap-4']">
          <NuxtLink to="/" :class="['flex', $device.isMobile ? 'self-center' :'self-start mr-6']">
            <img
              :src="require('@/assets/imgs/9d4964aea26fde815a6d55c29d22041d.png')"
              class="w-40"
              alt="Flowbite Logo"
            />
          </NuxtLink>
          <div
            :class="['flex', 'flex-col', $device.isMobile ? 'gap-4 self-center text-center leading-6' : 'gap-11']"
          >
            <ul>
              <li class="my-0.5">
                <NuxtLink
                  to="/services"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Услуги</NuxtLink
                >
              </li>
              <li class="my-0.5">
                <NuxtLink
                  to="/"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Расчитать стоимость похорон</NuxtLink
                >
              </li>
              <li class="my-0.5">
                <NuxtLink
                  to="/price"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Комплексные услуги</NuxtLink
                >
              </li>
              <li class="my-0.5">
                <NuxtLink
                  to="/blog"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Полезная информация</NuxtLink
                >
              </li>
            </ul>
            <ul>
              <li class="my-0.5">
                <NuxtLink
                  to="/"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Договор на оказание ритуальных услуг</NuxtLink
                >
              </li>
              <li class="my-0.5">
                <NuxtLink
                  to="/gerbovoe_svidetel_stvo_o_smerti"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Свидетельство о смерти</NuxtLink
                >
              </li>
              <li class="my-0.5">
                <NuxtLink
                  to="/chto_poluchit_spravku_11"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Справка о смерти по форме 11</NuxtLink
                >
              </li>
              <li class="my-0.5">
                <NuxtLink
                  to="/"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Льготы</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div
            :class="['flex', 'flex-col', $device.isMobile ? 'gap-4 self-center text-center' : 'gap-11']"
          >
            <ul>
              <li class="my-0.5">
                <NuxtLink
                  to="/posobie_na_pogrebenie"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Льготы и Пособия</NuxtLink
                >
              </li>
              <li class="my-0.5">
                <NuxtLink
                  to="/mesto_na_kladbishche"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Место на кладбище</NuxtLink
                >
              </li>
              <li class="my-0.5">
                <NuxtLink
                  to="/gruz_200"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Груз 200</NuxtLink
                >
              </li>
              <li class="my-0.5">
                <NuxtLink
                  to="/kremaciya"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Кремация</NuxtLink
                >
              </li>
            </ul>
            <ul>
              <li class="my-0.5">
                <NuxtLink
                  to="/"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Сотрудничество</NuxtLink
                >
              </li>
              <li class="my-0.5">
                <NuxtLink
                  to="/"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Оферты</NuxtLink
                >
              </li>
              <li class="my-0.5">
                <NuxtLink
                  to="/"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >О службе</NuxtLink
                >
              </li>
              <li class="my-0.5">
                <NuxtLink
                  to="/"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Отзывы</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div :class="['flex', 'flex-col', 'content-center', 'basis-1/5', $device.isMobile? 'self-center text-center':'mr-36']">
        <div
          class="
            inline-flex
            flex-col
            justify-center
            flex-nowrap
            xl:whitespace-nowrap
            mb-6
          "
        >
          <span
            >Горячая линия -
            <strong class="text-theme-1">Круглосуточно</strong></span
          >
          <a href="tel:+73522610630" class="font-bold text-2xl"
            >+7 (3522) 610‒630</a
          >
        </div>
        <h4 class="text-2xl font-bold">Наши адреса:</h4>
        <div class="inline-flex flex-col justify-center whitespace-nowrap mb-4">
          <span class="text-lg font-semibold md:text-base"
            >пр-кт Машиностроителей, 34</span
          >
          <a href="tel:+73522256075">+7 (3522) 25‒60‒75</a>
        </div>
        <div class="inline-flex flex-col justify-center whitespace-nowrap mb-4">
          <span class="text-lg font-semibold md:text-base"
            >ул. Коли Мяготина 102а</span
          >
          <a href="tel:+73522256075">+7 (3522) 622‒000</a>
        </div>
        <div class="inline-flex flex-col justify-center whitespace-nowrap mb-4">
          <span class="text-lg font-semibold md:text-base">ул. Томина, 67</span>
          <a href="tel:+79128355992">+7‒912‒835‒59‒92</a>
        </div>
        <div class="inline-flex flex-col justify-center whitespace-nowrap">
          <span class="text-lg font-semibold md:text-base"
            >ул. Карбышева 35к5</span
          >
          <a href="tel:+73522554400">+7 (3522) 554‒400 </a>
        </div>
      </div>
    </div>
    <div :class="['flex', $device.isMobile?'flex-col items-center content-center mt-8 text-center gap-9':'gap-44 mt-4 pb-4', 'justify-start']">
      <div>
        <span>Все права защищены © 2001 - {{date}} </span>
      </div>
      <div :class="['flex', $device.isMobile?'flex-col gap-2':'gap-4']">
        <a href="/">Правила использования</a>
        <a href="/">Политика конфиденциальности</a>
      </div>
    </div>
  </div>
</template>


<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue {
  date = new Date().getFullYear();
}
</script>