<template>
  <nav class="border-gray-200 dark:border-gray-600">
    <div
      class="
        flex flex-nowrap
        items-center
        mx-auto
        max-w-screen-xl
        px-4
        md:px-6
        py-2.5
      "
    >
      <NuxtLink to="/" class="flex items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/96b7/f68a/9d4964aea26fde815a6d55c29d22041d?Expires=1670198400&Signature=UsBhBSQkY5Wd8C-SNTG4mi8Ew57saGxrA8akQk2TXd3Q~zvF5R6Vkqer31yBAjb1r~xUlIHe7wJDYEQ9mFOOdkOtNfvls6f01FhONLznIzdkZ0OoxoM8xS3NIZeXbIJ4BDzAkE3HkwILAB-WMZo2XLnvpGh5Ms0U2c4XtZ2pcNGoL3HGCjwMHTDvA5ob5Tmww7r7plLjaKhBNsPHh4MlbFg-ea~41SMdR1-xOS8GroDfy0f3NVxXOvT5x55MylDHHFeAtP473E6Olv4nkLf9MbRpVigd554pMS8fE0ev93x3BMiBkK9qNS5sCej~v5W0TnApIVDLj1XAMFhA~fYJYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          class="w-24"
          alt="Flowbite Logo"
        />
      </NuxtLink>

      <div
        id="mega-menu-full"
        class="
          ml-24
          justify-between
          items-center
          w-full
          text-base
          md:flex md:w-auto md:order-1
        "
      >
        <ul
          class="
            flex flex-col
            justify-items-center
            gap-11
            mt-4
            rounded-lg
            border border-gray-100
            md:flex-row
            md:space-x-8
            md:mt-0
            md:font-medium
            md:border-0
            dark:border-gray-700
          "
        >
          <NuxtLink
            v-for="(item, index) in dataMenu"
            :key="index"
            :to="item.url"
            :exact="true"
          >
            <li
              aria-haspopup="true"
              aria-expanded="false"
              class="
                block
                py-2
                px-2
                rounded
                hover:underline
                md:hover:text-theme-1 md:p-0
                dark:border-gray-700
              "
            >
              {{ item.title }}
            </li>
          </NuxtLink>
        </ul>
      </div>
    </div>
    <!-- <div
      ref="mega-menu"
      class="
        mt-1
        bg-gray-50
        border-gray-200
        shadow-sm
        md:bg-white
        border-y
        dark:bg-gray-800 dark:border-gray-600
      "
    >
      <div
        id="multiCollapseExample2"
        class="
          collapse
          multi-collapse
          grid
          py-5
          px-4
          mx-auto
          max-w-screen-xl
          text-gray-900
          dark:text-white
          sm:grid-cols-2
          md:px-6
        "
      >
        <ul>
          <li>
            <a
              href="#"
              class="
                block
                p-3
                rounded-lg
                hover:bg-gray-100
                dark:hover:bg-gray-700
              "
            >
              <div class="font-semibold">Online Stores</div>
              <span class="text-sm font-light text-gray-500 dark:text-gray-400"
                >Connect with third-party tools that you're already using.</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="
                block
                p-3
                rounded-lg
                hover:bg-gray-100
                dark:hover:bg-gray-700
              "
            >
              <div class="font-semibold">Segmentation</div>
              <span class="text-sm font-light text-gray-500 dark:text-gray-400"
                >Connect with third-party tools that you're already using.</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="
                block
                p-3
                rounded-lg
                hover:bg-gray-100
                dark:hover:bg-gray-700
              "
            >
              <div class="font-semibold">Marketing CRM</div>
              <span class="text-sm font-light text-gray-500 dark:text-gray-400"
                >Connect with third-party tools that you're already using.</span
              >
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="#"
              class="
                block
                p-3
                rounded-lg
                hover:bg-gray-100
                dark:hover:bg-gray-700
              "
            >
              <div class="font-semibold">Online Stores</div>
              <span class="text-sm font-light text-gray-500 dark:text-gray-400"
                >Connect with third-party tools that you're already using.</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="
                block
                p-3
                rounded-lg
                hover:bg-gray-100
                dark:hover:bg-gray-700
              "
            >
              <div class="font-semibold">Segmentation</div>
              <span class="text-sm font-light text-gray-500 dark:text-gray-400"
                >Connect with third-party tools that you're already using.</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="
                block
                p-3
                rounded-lg
                hover:bg-gray-100
                dark:hover:bg-gray-700
              "
            >
              <div class="font-semibold">Marketing CRM</div>
              <span class="text-sm font-light text-gray-500 dark:text-gray-400"
                >Connect with third-party tools that you're already using.</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div> -->
  </nav>
</template>


<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class NavMenu extends Vue {
  @Prop({ type: Array, default: () => [] }) dataMenu;

  // dataMenu = dataMenu;
  OpenOrClose() {
    // this.$refs.mega-menu
  }
  mounted() {}
}
</script>
