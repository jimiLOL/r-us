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
              src="https://s3-alpha-sig.figma.com/img/96b7/f68a/9d4964aea26fde815a6d55c29d22041d?Expires=1668988800&Signature=FdeVl5A67-NC0HZXyDgOieDZYTR-vonAEEswv8AXckI5ghz4JhbCTC4UQd-zSYOS5Sz0LpCK2xTdXvVQ3N9y21irrOAYMuP3y79vHXNxFfciOCxYIBmOdEqxeKaSe4U~RcaHAgipqxHFeN9YmaC1CNKPA6P~Az8MV-4SL47QYNUGne~7OJ83WbSyDEmRk8eTgHbMthxMuzVKyNvH8skhF04Kw3nq4hEIbYpKoT0PlFSWE~LgW-dlZ8~7RBYztkZbzSdDM333M0o5E~RD7ZZnwvWrXKYWsO9BtaBa2dhyNg5O2Z90Xcv0SGgOb9yyVAhGpgwzYxO3rrhYLmsPRtMfag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                  to="/"
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
                  to="/"
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
                  to="/"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Статьи</NuxtLink
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
                  to="/"
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
                  to="/"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Справка о смерти по форие 11</NuxtLink
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
                  to="/"
                  class="
                    hover:underline
                    md:hover:bg-transparent md:hover:text-theme-1
                  "
                  no-prefetch
                  >Захоронение</NuxtLink
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
                  >Место на кладбище</NuxtLink
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
                  >Груз 200</NuxtLink
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
        <span>Все права защищены © 2022 </span>
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
export default class Footer extends Vue {}
</script>