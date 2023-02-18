<template>
  <div
    :class="[
      'fixed inset-0 z-50 w-full md:inset-0 md:h-full tran overflow-x-hidden bg-gray-900 bg-opacity-50 text-black',
      $device.isMobile ? 'h-full overflow-y-scroll' : 'p-4 overflow-y-hidden',
    ]"
  >
    <div
      v-if="!sendStatus"
      :class="[
        'fixed',
        $device.isMobile ? '' : 'inset-96',
        'mx-auto',
        'my-auto',
        'bg-theme-2',
        'rounded-xl',
        $device.isMobile ? 'h-screen w-full' : 'h-96 w-max',
        'flex',
        'flex-col',
        $device.isMobile ? 'gap-9' : 'gap-4',
        'items-center',
        'justify-center',
      ]"
    >
      <button
        type="button"
        class="
          absolute
          top-2
          right-2
          text-theme-8
          bg-transparent
          hover:bg-gray-200 hover:text-gray-900
          rounded-lg
          text-sm
          p-1.5
          ml-auto
          inline-flex
          items-start
          self-start
          justify-self-start
          dark:hover:bg-gray-600 dark:hover:text-white
        "
        data-modal-toggle="defaultModal"
        @click="closeModal"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <img
        :src="require('@/assets/imgs/logo.png')"
        :class="['w-36', $device.isMobile ? '' : 'fixed top-36']"
        alt="Ритуальная служба Кургана"
      />
      <div
        :class="[
          'text-lg',
          'font-bold',
          $device.isMobile ? 'whitespace-pre' : 'mx-5',
        ]"
      >
        <span>Введите ваши данные, и мы вам позвоним</span>
      </div>
      <div class="flex flex-col w-full gap-4 px-4">
        <input
          class="rounded-lg py-2 px-2"
          type="text"
          name="name"
          value=""
          placeholder="Ваше имя"
          v-model="name"
        />
        <input
          class="rounded-lg py-2 px-2"
          type="phone"
          name="phone"
          value=""
          placeholder="+7 (999) 123-12-12"
          v-model="phone"
        /><label
          v-if="phone.length >= 3 && !validation"
          class="text-theme-7"
          for="phone"
          >Проверьте правильность номера телефона</label
        >
        
      <button
        class="
          w-full
          bg-gradient-to-t
          from-bt-2
          to-bt-1
          px-28
          py-2
          rounded-md
          hover:from-theme-6 hover:underline
          focus:bg-theme-9
          font-bold
          disabled:bg-theme-2
          text-white
        "
        :disabled="!validation"
        @click="sendData"
      >
        Позвоните мне
      </button>
      </div>

     

    </div>
    <div
      v-else
      :class="[
        'fixed',
        $device.isMobile ? '' : 'inset-96',
        'mx-auto',
        'my-auto',
        'bg-theme-2',
        'rounded-xl',
        $device.isMobile ? 'h-screen w-full' : 'h-96 w-max',
        'flex',
        'flex-col',
        'gap-9',
        'items-center',
        'justify-center',
      ]"
    >
      <span>Спасибо. Скоро мы Вам позвоним.</span>
      <span>Это окно закроется через {{ timer }}</span>
    </div>
  </div>
</template>


<script>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import shopApi from "~/api/shop";

@Component({})
export default class PopUpCall extends Vue {
  closeModal() {
    window.$nuxt.$emit("callMe", false);
  }
  name = "";
  phone = "";
  validation = false;
  sendStatus = false;
  timer = 10;

  @Watch("phone")
  validatePhone() {
    const re =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    this.validation = re.test(this.phone);
  }

  async sendData() {
    this.validatePhone();
    if (this.validation) {
      console.log("send data");
      await shopApi
        .sendFormCall({ name: this.name, phone: this.phone })
        .then(async (r) => {
          console.log(r);
          if (r.code === 200) {
            this.sendStatus = true;
            for (let index = 1; index < 10; index++) {
              this.timer--;
              await new Promise((resolve) => setTimeout(resolve, 1000));
              if (index >= 9) {
                this.closeModal();
              }
            }
            setTimeout(() => {}, 8000);
          }
        });
    }
  }
}
</script>
