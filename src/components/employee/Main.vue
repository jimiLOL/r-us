<template>
  <div class="flex flex-col gap-4">
    <h1
      :class="[
        'text-bold',
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
          src="https://s3-alpha-sig.figma.com/img/3f8d/80d5/602911a9c7259bcac02d76df8af549d8?Expires=1668988800&Signature=g9cdfJlt69GHm3NvVchLJT7Mi-s9t9~SbCCJD4i3ZDcsHVo4hwl32Ean3j87HK8NCY7GDn2lpYnL2zpiffBvVsq3jaB-FiYHcFDzmWH~dWEukhSiIWvqbyOFV6cyNwexrnYyNwuxSbYKnx2dVqaxdTrfnDtQd3eY3jvsgTblO7fZwkHblpSvgzXdBYXmQAhivtRBB8EDQD~DflWqF84P2ceG4ZP5wBcDN2Ve4U~oa3tKMxQ~R6a1JabVg9RWjJrUJg-J~-ozfnW44NGYK5GdT7yjOWgzlMLhKb0mxcAllKAZaq7B3jUhyHjE1R7tP5f8nnu2f3C~jyUTB2nnjAVDwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <span class="text-lg text-bold">Григорий</span>
        <span class="text-normal">Директор</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/3f8d/80d5/602911a9c7259bcac02d76df8af549d8?Expires=1668988800&Signature=g9cdfJlt69GHm3NvVchLJT7Mi-s9t9~SbCCJD4i3ZDcsHVo4hwl32Ean3j87HK8NCY7GDn2lpYnL2zpiffBvVsq3jaB-FiYHcFDzmWH~dWEukhSiIWvqbyOFV6cyNwexrnYyNwuxSbYKnx2dVqaxdTrfnDtQd3eY3jvsgTblO7fZwkHblpSvgzXdBYXmQAhivtRBB8EDQD~DflWqF84P2ceG4ZP5wBcDN2Ve4U~oa3tKMxQ~R6a1JabVg9RWjJrUJg-J~-ozfnW44NGYK5GdT7yjOWgzlMLhKb0mxcAllKAZaq7B3jUhyHjE1R7tP5f8nnu2f3C~jyUTB2nnjAVDwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <span class="text-lg text-bold">Григорий</span>
        <span class="text-normal">Директор</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/3f8d/80d5/602911a9c7259bcac02d76df8af549d8?Expires=1668988800&Signature=g9cdfJlt69GHm3NvVchLJT7Mi-s9t9~SbCCJD4i3ZDcsHVo4hwl32Ean3j87HK8NCY7GDn2lpYnL2zpiffBvVsq3jaB-FiYHcFDzmWH~dWEukhSiIWvqbyOFV6cyNwexrnYyNwuxSbYKnx2dVqaxdTrfnDtQd3eY3jvsgTblO7fZwkHblpSvgzXdBYXmQAhivtRBB8EDQD~DflWqF84P2ceG4ZP5wBcDN2Ve4U~oa3tKMxQ~R6a1JabVg9RWjJrUJg-J~-ozfnW44NGYK5GdT7yjOWgzlMLhKb0mxcAllKAZaq7B3jUhyHjE1R7tP5f8nnu2f3C~jyUTB2nnjAVDwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <span class="text-lg text-bold">Григорий</span>
        <span class="text-normal">Директор</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/3f8d/80d5/602911a9c7259bcac02d76df8af549d8?Expires=1668988800&Signature=g9cdfJlt69GHm3NvVchLJT7Mi-s9t9~SbCCJD4i3ZDcsHVo4hwl32Ean3j87HK8NCY7GDn2lpYnL2zpiffBvVsq3jaB-FiYHcFDzmWH~dWEukhSiIWvqbyOFV6cyNwexrnYyNwuxSbYKnx2dVqaxdTrfnDtQd3eY3jvsgTblO7fZwkHblpSvgzXdBYXmQAhivtRBB8EDQD~DflWqF84P2ceG4ZP5wBcDN2Ve4U~oa3tKMxQ~R6a1JabVg9RWjJrUJg-J~-ozfnW44NGYK5GdT7yjOWgzlMLhKb0mxcAllKAZaq7B3jUhyHjE1R7tP5f8nnu2f3C~jyUTB2nnjAVDwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <span class="text-lg text-bold">Григорий</span>
        <span class="text-normal">Директор</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/3f8d/80d5/602911a9c7259bcac02d76df8af549d8?Expires=1668988800&Signature=g9cdfJlt69GHm3NvVchLJT7Mi-s9t9~SbCCJD4i3ZDcsHVo4hwl32Ean3j87HK8NCY7GDn2lpYnL2zpiffBvVsq3jaB-FiYHcFDzmWH~dWEukhSiIWvqbyOFV6cyNwexrnYyNwuxSbYKnx2dVqaxdTrfnDtQd3eY3jvsgTblO7fZwkHblpSvgzXdBYXmQAhivtRBB8EDQD~DflWqF84P2ceG4ZP5wBcDN2Ve4U~oa3tKMxQ~R6a1JabVg9RWjJrUJg-J~-ozfnW44NGYK5GdT7yjOWgzlMLhKb0mxcAllKAZaq7B3jUhyHjE1R7tP5f8nnu2f3C~jyUTB2nnjAVDwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <span class="text-lg text-bold">Григорий</span>
        <span class="text-normal">Директор</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/3f8d/80d5/602911a9c7259bcac02d76df8af549d8?Expires=1668988800&Signature=g9cdfJlt69GHm3NvVchLJT7Mi-s9t9~SbCCJD4i3ZDcsHVo4hwl32Ean3j87HK8NCY7GDn2lpYnL2zpiffBvVsq3jaB-FiYHcFDzmWH~dWEukhSiIWvqbyOFV6cyNwexrnYyNwuxSbYKnx2dVqaxdTrfnDtQd3eY3jvsgTblO7fZwkHblpSvgzXdBYXmQAhivtRBB8EDQD~DflWqF84P2ceG4ZP5wBcDN2Ve4U~oa3tKMxQ~R6a1JabVg9RWjJrUJg-J~-ozfnW44NGYK5GdT7yjOWgzlMLhKb0mxcAllKAZaq7B3jUhyHjE1R7tP5f8nnu2f3C~jyUTB2nnjAVDwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <span class="text-lg text-bold">Григорий</span>
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