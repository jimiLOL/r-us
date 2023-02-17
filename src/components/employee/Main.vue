<template>
  <div class="flex flex-col gap-4">
    <h1
      :class="[
        'font-bold',
        $device.isMobile ? 'text-2xl text-center' : 'text-4xl',
      ]"
    >
      Наши сотрудники
    </h1>
    <div
      :class="[
        'grid',
        $device.isMobile
          ? 'grid-cols-1 grid-rows-6'
          : 'grid-cols-3 grid-rows-2',
        'gap-4',
      ]"
    >
      <div class="flex flex-col items-center">
        <img
        class="h-74"
        :src="require('@/assets/imgs/employee/602911a9c7259bcac02d76df8af549d8.jpg')"
        
          alt=""
        />
        <span class="text-lg font-bold">Григорий</span>
        <span class="text-normal">Директор</span>
      </div>
      <div class="flex flex-col items-center">
        <img
        class="h-74"
          :src="require('@/assets/imgs/employee/602911a9c7259bcac02d76df8af549d8.jpg')"
          alt=""
        />
        <span class="text-lg font-bold">Светлана</span>
        <span class="text-normal">Бухгалтер</span>
      </div>
      <div class="flex flex-col items-center">
        <img
        class="h-74"
          :src="require('@/assets/imgs/employee/602911a9c7259bcac02d76df8af549d8.jpg')"
          alt=""
        />
        <span class="text-lg font-bold">Максим</span>
        <span class="text-normal">Менеджер</span>
      </div>
      <div class="flex flex-col items-center">
        <img
        class="h-74"
          :src="require('@/assets/imgs/employee/602911a9c7259bcac02d76df8af549d8.jpg')"
          alt=""
        />
        <span class="text-lg font-bold">Евгений</span>
        <span class="text-normal">Оператор</span>
      </div>
      <div class="flex flex-col items-center">
        <img
        class="h-74"
          :src="require('@/assets/imgs/employee/602911a9c7259bcac02d76df8af549d8.jpg')"
          alt=""
        />
        <span class="text-lg font-bold">Григорий</span>
        <span class="text-normal">Бригадир насильщиков</span>
      </div>
      <div class="flex flex-col items-center">
        <img
        class="h-74"
          :src="require('@/assets/imgs/employee/602911a9c7259bcac02d76df8af549d8.jpg')"
          alt=""
        />
        <span class="text-lg font-bold">Григорий</span>
        <span class="text-normal">Директор</span>
      </div>
    </div>
  </div>
</template>



<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Employee extends Vue {}
</script>