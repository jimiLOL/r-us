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
    <div class="flex flex-col gap-4 pt-20">
      <div
        :class="[
          'flex',
          $device.isMobile ? 'flex-col max-h-96' : 'flex-row max-h-36',
          'w-full',
          'gap-4',
          'overflow-hidden',
          'border-2',
          'rounded-lg',
          'border-theme-11',
          'border-solid',
        ]"
      >
        <img
          :class="[$device.isMobile ? 'w-full' : 'w-1/3', 'rounded-md']"
          src="https://s3-alpha-sig.figma.com/img/2572/0f77/0a1518dc67a52b047586e1a35870f8c9?Expires=1668988800&Signature=Di4upzz7kPUYrbyJO07BCMaxauFQSUAoVlPrwCNWgUh7DE3JP2fYkKxkX71sRM2unbLA2k390Hre9jxLrOxQheYdC9~4F2oId9Ij4Pk73wFY9Jd1XEuCn-~qLby2z-fHJNHM27jVh75BliJF3i5X3mcrgcyfgL-PidUwsYwulOf0Pazgn4JqMtxnnEko1nr-htCc7lNVu3XMuzbxwabbhAxsZns1AjPwKt8Jo6RPicL40Hn9Rs8rleBwrelw4~N-fgKlqnZLGn5TX6CBL61Y5EaSRyCizrOgGa61lvxHg3ybDNTrcsQh4~sAoWwdxwPS~OBzOgRNMcFKGuBevhndoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <div
          :class="[
            'flex',
            'flex-col',
            'w-full',
            $device.isMobile ? 'text-center' : '',
          ]"
        >
          <h3 class="text-bold text-2xl">Надписи на православном кресте</h3>
          <p>
            Если рассмотреть православный крестик, то можно заметить
            многочисленные надписи.
          </p>
        </div>
        <button
          :class="[
            'rounded-lg',
            'border-2',
            'border-social-3',
            $device.isMobile ? 'w-5/6 mx-4 self-center' : 'w-1/3 mr-2',
            'self-end',
            'py-4',
            'px-1',
            'my-4',
            'hover:text-black',
            'hover:bg-theme-1',
            'hover:border-black',
            'focus:text-black',
            'focus:bg-theme-1',
            'focus:border-black',
          ]"
        >
          Выбрать
        </button>
      </div>

       
    </div>
  </div>
</template>



<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Services extends Vue {}
</script>
