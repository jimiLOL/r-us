<template>
  <!-- Modal toggle -->
  <!-- <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
  Toggle modal
</button> -->

  <!-- Main modal -->
  <div
    :class="[
      'fixed top-0 left-0 right-0 z-50 w-full md:inset-0 h-screen tran overflow-x-hidden text-black',
      $device.isMobile ? 'h-full overflow-y-scroll' : 'p-4 overflow-y-hidden',
    ]"
  >
    <div :class="['relative', 'w-full', 'h-full', checkProduct ? 'overflow-y-scroll':'']">
      <!-- Modal content -->
      <div class="relative text-black bg-white rounded-lg">
        <!-- Modal header -->
        <div v-if="!checkProduct" class="flex flex-col p-6 w-full gap-2">
          <div
            v-if="!filterOpen"
            :class="[
              'grid',
              $device.isMobile ? 'grid-rows-2' : 'grid-rows-1',
              'grid-cols-10',
              'justify-items-start',
              'flex-nowrap',
              'text-black',
              'gap-4',
              'w-full',
              'font-semibold',
              'pl-3',
              'tran',
            ]"
          >
            <div
              :class="[
                'cursor-pointer',
                'hover:underline',
                'underline-offset-8',
                'hover:text-theme-10',
                'min-w-24',

                $device.isMobile ? 'col-start-1 col-end-5' : '',
                stateModal.tab == 'provaslavny'
                  ? 'text-theme-10 textShadow'
                  : '',
              ]"
              @click="setTypeShop('provaslavny')"
            >
              Православные
            </div>
            <div
              :class="[
                'cursor-pointer',
                'hover:underline',
                'underline-offset-8',
                'hover:text-theme-10',
                'min-w-24',

                $device.isMobile ? 'col-start-6 col-end-10' : '',
                stateModal.tab == 'mysulman' ? 'text-theme-10 textShadow' : '',
              ]"
              @click="setTypeShop('mysulman')"
            >
              Мусульманские
            </div>
            <div
              :class="[
                'cursor-pointer',
                'hover:underline',
                'underline-offset-8',
                'hover:text-theme-10',
                'min-w-24',
                $device.isMobile ? 'col-start-1 col-end-5' : '',
                stateModal.tab == 'kremacia' ? 'text-theme-10 textShadow' : '',
              ]"
              @click="setTypeShop('kremacia')"
            >
              Кремация
            </div>

            <div
              :class="[
                $device.isMobile ? 'row-start-2' : '',
                'col-start-9 col-end-10',
                'inline-flex',
                'gap-2',
                'cursor-pointer',
                'justify-self-end',
              ]"
              @click="filterOpen = true"
            >
              Фильтр <SvgFilter />
            </div>
            <button
              type="button"
              class="
                absolute
                top-2
                right-2
                text-gray-400
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
              @click="closeModalWindow"
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
          </div>
          <div v-if="!filterOpen" class="flex gap-2 mt-2">
            <SlickSlider
              class="w-full"
              ref="navSlick"
              :settings="setting_slider"
            >
              <div
                v-for="(item, index) in tabMenu"
                :key="index"
                :class="[
                  'cursor-pointer',
                  'text-theme-4',
                  'hover:underline',
                  'underline-offset-8',
                  'focus:text-theme-10',
                  'tran',
                  'max-w-9',
                  translit(item.name) ? 'text-theme-10 underline' : '',
                ]"
                @click="setCategory(item.name, index)"
              >
                {{ item.name }}
              </div>
            </SlickSlider>
          </div>
          <div v-else class="flex gap-4 tran">
            <label
              for="countries"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-white
              "
              >Сортировка по цене</label
            >
            <select
              id="countries"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              v-model="selectPrice"
            >
              <option value="all" selected>Все</option>
              <option value="1-3000">от 1 до 3000</option>
              <option value="3000-6000">от 3000 до 6000</option>
              <option value="6000-9000">от 6000 до 9000</option>
              <option value="9000-20000">от 9000 до 20000</option>
            </select>
            <button
              type="button"
              class="
                text-gray-400
                bg-transparent
                hover:bg-gray-200 hover:text-gray-900
                rounded-lg
                text-sm
                p-1.5
                ml-auto
                inline-flex
                items-center
                dark:hover:bg-gray-600 dark:hover:text-white
              "
              data-modal-toggle="defaultModal"
              @click="filterOpen = false"
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
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div
            :class="[
              'grid',
              $device.isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-6',
            ]"
          >
            <div
              v-for="(item, index) in itemList"
              :key="index"
              :class="[
                'flex',
                $device.isMobile ? 'flex-col gap-2' : 'flex-row gap-4',
              ]"
            >
              <div
                :class="[
                  'flex',
                  'flex-col',
                  'gap-6',
                  $device.isMobile ? 'w-full' : 'w-96',
                  'h-full',
                ]"
              >
                <div
                  :class="[
                    'h-48',
                    'cursor-pointer',
                    loadImg && !loadStatus
                      ? ''
                      : 'animate-pulse bg-gray-500 rounded-2xl border-2 border-solid border-black loading',
                  ]"
                  @click="setPicked(`rb${index}`)"
                >
                  <input
                    type="radio"
                    name="rb"
                    :id="`rb${index}`"
                    :value="`rb${index}`"
                    v-model="picked"
                  /><label :for="`rb${index}`"></label>
                  <img
                    v-show="loadImg && !loadStatus"
                    ref="mainImg"
                    class="
                      object-cover
                      w-full
                      h-full
                      rounded-2xl
                      border-2 border-solid border-black
                      hover:border-theme-1
                      lazyload
                    "
                    :src="`https://drive.google.com/uc?export=view&id=${
                      item.imgs[imgSwitcher[`img${index}`]] ||
                      '1Sys-zgzAPhe-yb_5QY-kZsCTEfOmqxyC'
                    }`"
                    :alt="`${item.title} в Кургане`"
                    @load="onImgLoad(index)"
                    @click="setUserProduct(item)"
                  />
                </div>
                <SlickSlider
                  :class="[$device.isMobile ? 'w-full' : 'w-96']"
                  ref="navSlick"
                  :settings="setting_nav"
                >
                  <div v-for="(img, i) in item.imgs" :key="i">
                    <div
                      :class="[
                        'cursor-pointer',
                        'min-w-24',
                        'px-1',
                        'min-h-max',
                        loadImg && !loadStatus
                          ? ''
                          : 'animate-pulse bg-gray-500 rounded-2xl border-2 border-solid border-black loading',
                      ]"
                      @click="goto(index, i)"
                    >
                      <img
                        v-show="loadImg && !loadStatus"
                        class="
                          object-cover
                          border-2 border-solid border-black
                          w-max
                          h-20
                          rounded-lg
                          tran
                        "
                        :src="`https://drive.google.com/uc?export=view&id=${img}`"
                        :alt="`${item.title} в Кургане`"
                      />
                    </div>
                  </div>
                </SlickSlider>
              </div>
              <div
                :class="[
                  'flex',
                  $device.isMobile
                    ? 'flex-row'
                    : 'flex-col items-start justify-between w-64 h-max py-4',
                ]"
              >
                <div
                  :class="[
                    'flex',
                    'gap-2',
                    $device.isMobile ? 'flex-col' : 'flex-col',
                  ]"
                >
                  <div>
                    <h2
                      :class="[
                        $device.isMobile ? 'text-xl' : 'text-2xl',
                        'font-bold',
                        'cursor-pointer',
                        'hover:underline',
                      ]"
                      @click="setUserProduct(item), (picked = `rb${index}`)"
                    >
                      {{ item.title }}
                    </h2>
                  </div>
                  <div class="self-start justify-self-start">
                    {{ item.about }}
                  </div>
                </div>

                <div
                  :class="[
                    $device.isMobile ? 'text-lg' : 'text-2xl',
                    'font-bold',
                  ]"
                >
                  {{ item.price }} руб.
                </div>
              </div>
            </div>
          </div>
          <div
            :class="[
              'grid',
              $device.isMobile ? 'grid-cols-4' : 'grid-cols-3',
              'items-end',
              'justify-items-center',
              'gap-4',
              'w-full',
              'h-20',
            ]"
          >
            <div
              v-show="viewingPage > 0 && viewingPage != tabMenu.length - 1"
              class="col-span-1"
            >
              <button
                class="
                  bg-theme-5
                  px-6
                  py-2
                  text-white
                  rounded-lg
                  hover:bg-theme-12 hover:transform hover:scale-95
                "
                @click="backButton()"
              >
                Назад
              </button>
            </div>
            <div
              :class="[
                $device.isMobile ? 'w-full col-span-2' : 'col-start-2',
                !$device.isMobile && viewingPage == tabMenu.length - 1
                  ? 'lg:col-span-2 xl:col-span-2 xxl:col-span-2'
                  : '',
                $device.isMobile && viewingPage == tabMenu.length - 1
                  ? 'col-span-4'
                  : '',
              ]"
            >
              <Pagination
                :current="page"
                :siblings="stateModal.limit"
                :total="stateModal.total"
                @page-change="handlePageChange"
              />
            </div>

            <div
              :class="[
                viewingPage > 0 && !$device.isMobile
                  ? 'col-span-1 col-start-3'
                  : '',
                $device.isMobile && viewingPage == tabMenu.length - 1
                  ? 'col-span-4'
                  : '',
                !$device.isMobile && viewingPage == tabMenu.length - 1
                  ? 'col-span-1'
                  : '',
              ]"
            >
              <button
                v-if="viewingPage < tabMenu.length - 1"
                class="
                  bg-theme-5
                  px-6
                  py-2
                  text-white
                  rounded-lg
                  hover:bg-theme-12 hover:transform hover:scale-95
                "
                @click="nextButton()"
              >
                Далее
              </button>
              <button
                v-else
                class="
                  bg-theme-12
                  px-6
                  py-2
                  text-white
                  rounded-lg
                  hover:bg-theme-3
                  hover:transform
                  hover:scale-120
                  hover:text-black
                "
                @click="checkProduct = true"
              >
                Перейти к оформлению
              </button>
            </div>
          </div>
        </div>
        <div
          v-else
          class="flex flex-col p-6 w-full gap-2 overflow-y-scroll "
        >
          <div
            :class="[
              'grid',
              $device.isMobile ? 'grid-cols-1 h-screen' : 'grid-cols-4',
              'gap-3',
            ]"
          > <button
              type="button"
              class="
                absolute
                top-2
                right-2
                text-gray-400
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
              @click="closeModalWindow"
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
            <div
              :class="[
                $device.isMobile ? 'justify-self-center' : 'col-span-3',
                'flex',
                'flex-col',
                'gap-4',
                'w-max',
                'snap-x'
              ]"
            >
              <div
                v-for="(item, index) in productUser.user_choice"
                :key="index"
                :class="[
                  'flex',
                  'snap-center tran',
                  $device.isMobile ? 'flex-col gap-2' : 'flex-row gap-4 h-max',
                ]"
              >
                <div
                  v-if="item.hasOwnProperty('img')"
                  :class="[
                    'flex',
                    'flex-col',
                    'gap-4',
                    'h-full',
                    $device.isMobile ? 'w-full' : 'w-2/5',
                  ]"
                >
                  <div
                    :class="[
                      'flex',
                      'flex-col',
                      'justify-center',
                      'h-40',
                      'cursor-pointer',
                      loadImg && !loadStatus
                        ? ''
                        : 'animate-pulse bg-gray-500 rounded-2xl border-2 border-solid border-black loading',
                    ]"
                  >
                    <div class="h-fit self-center">
                      <h2
                        :class="[
                          'text-lg',
                          'font-bold',
                          'cursor-pointer',
                          'hover:underline',
                          'text-center',
                          $device.isMobile ? 'w-80' : '',
                        ]"
                      >
                        {{ item.title }}
                      </h2>
                    </div>

                    <img
                      v-show="loadImg && !loadStatus"
                      ref="mainImg"
                      :class="[
                        'self-center',
                        'justify-self-center',
                        'object-cover',
                        $device.isMobile ? 'w-80' : 'w-6/12',
                        'h-28',
                        'rounded-2xl',
                        'border-2',
                        'border-solid',
                        'border-black',
                        'hover:border-theme-1',
                        'lazyload',
                      ]"
                      :src="`https://drive.google.com/uc?export=view&id=${item.img}`"
                      :alt="`${item.title} в Кургане`"
                      @load="onImgLoad(index)"
                    />
                  </div>
                </div>
                <div
                  v-if="item.hasOwnProperty('img')"
                  :class="[
                    'flex',
                    'flex-col',
                    $device.isMobile
                      ? 'items-center justify-center w-full gap-2'
                      : 'items-start justify-between w-64 h-max pb-5 pt-4',
                  ]"
                >
                  <div :class="['flex', 'gap-2', 'flex-col']">
                    <div class="self-start justify-self-start">
                      {{ item.about }}
                    </div>
                  </div>

                  <div :class="['text-lg', 'font-bold']">
                    {{ item.price }} руб.
                  </div>
                </div>
                <div
                  :class="[
                    'justify-self-end',
                    'pl-9',
                    'inline-flex',
                    'gap-4',
                    'font-semibold',
                    'h-12',
                    $device.isMobile ? 'self-center' : 'self-start']
                  "
                >
                  <div type="button" class="text-theme-5 hover:underline cursor-pointer" @click="changeProduct(item.sheet_title)">Изменить</div>
                  <div type="button" class="text-theme-7 hover:underline cursor-pointer" @click="deleteItems(item)">Удалить</div>
                </div>
              </div>
            </div>
            <CtaButton :price="priceSum" :statusService="statusService" :numberBind="numberBind"/>
            <div v-if="$device.isMobile" class="justify-self-center flex h-max w-48 my-6 py-2 self-center">
                <button
                  class="
                    bg-theme-5
                    px-9
                    py-2
                    w-full
                    text-white
                    rounded-lg
                    hover:bg-theme-12 hover:transform hover:scale-95
                  "
                  @click="checkProduct = false"
                >
                  Назад
                </button>
            </div>
          </div>

          <div v-if="!$device.isMobile" class="flex h-max mt-2">
              <button
                class="
                  bg-theme-5
                  px-6
                  py-2
                  text-white
                  rounded-lg
                  hover:bg-theme-12 hover:transform hover:scale-95
                "
                @click="checkProduct = false"
              >
                Назад
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import SlickSlider from "~/components/slickSlider.vue";
import lazysizes from "lazysizes";
// import "lazysizes/plugins/blur-up/ls.blur-up";
import CyrillicToTranslit from "cyrillic-to-translit-js";
import { Getter } from "vuex-class";
import SvgFilter from "~/assets/imgs/shared/filter.svg";

import CtaButton from "~/shared/cta.vue";
const translit = new CyrillicToTranslit();
import shopApi from "~/api/shop";

// lazysizes.cfg.blurupMode = "always";

@Component({
  components: { SlickSlider, SvgFilter, CtaButton },
})
export default class ModalDialog extends Vue {
  // @Prop({type: Object, default: () => ({ tab: "provaslavny", sub_tab: "Grob" })}) stateModal;
  @Watch("selectPrice")
  setNewFilterPrice() {
    this.$store.commit("product/setNewFilterPrice", this.selectPrice);
    this.$store.dispatch("product/init");
  }

  @Getter("product/stateModal") stateModal;
  @Getter("product/productList") itemList;
  @Getter("product/loadStatus") loadStatus;

  filterOpen = false;
  selectPrice = "all";
  imgSwitcher = { img0: 0, img1: 0, img2: 0, img3: 0, img4: 0 };
  numberBind = '';

  page = 0;

  @Watch("page")
  setPage() {
    this.$store.commit("product/setPage", this.page);
    this.$store.dispatch("product/init");
  }
  checkProduct = false;

  productUser = {
    sub: {
      [translit.transform("Вывоз тела", "_")]: {
        price: 99,
        title: "Вывоз тела",
      },
      [translit.transform("Омовение", "_")]: { price: 99, title: "Омовение" },
    },
    user_choice: {},
  };

  viewingPage = 0;

  nextButton() {
    this.picked = null;
    this.page = 0;
    // console.log(translit.transform(this.tabMenu[0].name, "_"), this.stateModal.sub_tab);
    this.viewingPage = this.tabMenu.findIndex(
      (x, i) => translit.transform(x.name, "_") == this.stateModal.sub_tab
    );
    if (this.viewingPage < this.tabMenu.length - 1) {
      this.viewingPage++;
    }

    let translit_name = translit.transform(
      this.tabMenu[this.viewingPage].name,
      "_"
    );
    console.log(translit_name);
    this.$store.commit("product/setCategory", translit_name);

    this.$store.commit("product/setPage", this.page);
    this.$store.dispatch("product/init");
  }

  priceSum = 0;

  deleteItems(item) {

    // Object.keys(this.productUser.user_choice).forEach((key) => {
    //   if (this.productUser.user_choice[key].title == item.sheet_title) {
    //     delete this.productUser.user_choice[key];
    //   }
    // });
    const productUser_user_choice = {...this.productUser.user_choice}
    // console.log(this.productUser.user_choice[item.sheet_title]);
    delete productUser_user_choice[item.sheet_title];
    this.priceSum -= item.price;
    this.productUser.user_choice = productUser_user_choice;

  }

  backButton() {
    this.page = 0;
    this.viewingPage = this.tabMenu.findIndex(
      (x) => translit.transform(x.name, "_") == this.stateModal.sub_tab
    );
    if (this.viewingPage > 0) {
      this.viewingPage--;
    }

    let translit_name = translit.transform(
      this.tabMenu[this.viewingPage].name,
      "_"
    );
    console.log(translit_name);
    this.$store.commit("product/setCategory", translit_name);

    this.$store.commit("product/setPage", this.page);
    this.$store.dispatch("product/init");
  }

  closeModalWindow() {
    window.$nuxt.$emit("switchModal", false);
  }
  changeProduct(name) {
      this.$store.commit("product/setCategory", name);
    setTimeout(() => {
      this.viewingPage = this.tabMenu.findIndex(
        (x) => name == this.stateModal.sub_tab
      );
       this.setting_slider.goTo = this.viewingPage;
    }, 200);

    this.checkProduct = false;

    this.$store.dispatch("product/init");
  }
  setCategory(name, index) {
    this.picked = null;

    this.page = 0;
    this.$store.commit("product/setPage", this.page);

    let translit_name = translit.transform(name, "_");
    console.log(translit_name);
    this.setting_slider.goTo = index;

    this.$store.commit("product/setCategory", translit_name);
    setTimeout(() => {
      this.viewingPage = this.tabMenu.findIndex(
        (x) => translit.transform(x.name, "_") == this.stateModal.sub_tab
      );
    }, 200);

    this.$store.dispatch("product/init");
  }
  setTypeShop(name) {
    this.page = 0;
    this.$store.commit("product/setPage", this.page);

    this.$store.commit("product/setTypeShop", name);
    this.$store.dispatch("product/init");
  }

  // this.$store.commit('product/setLoad', name)

  translit(name) {
    // const translit = new CyrillicToTranslit();
    let translit_name = translit.transform(name, "_");
    // console.log(translit_name);
    if (translit_name == this.stateModal.sub_tab) {
      return true;
    } else {
      return false;
    }
  }

  onImgLoad(index) {
    setTimeout(() => {
      this.loadImg = true;
    }, 200);
  }
  loadImg = null;

  picked = null;
  tabMenu = [
    { name: "Гробы", id: 1 },
    { name: "Надгробие", id: 2 },
    { name: "Покрывало", id: 3 },
    { name: "Кладбище", id: 4 },
    { name: "Транспорт", id: 5 },
    { name: "Ограды", id: 6 },
    { name: "Услуги", id: 7 },
    { name: "Траурный зал", id: 8 },
    { name: "Остальное", id: 9 },
  ];

  setPicked(id) {
    this.picked = id;
  }
  setUserProduct(item) {
    this.productUser.user_choice[item.sheet_title] = {
      id: item.id_product,
      title: item.title,
      price: item.price,
      img: item.imgs[0],
      about: item.about,
      sheet_title: item.sheet_title,
    };
    this.priceSum = 0;
    Object.values(this.productUser.user_choice).forEach((item) => {
      this.priceSum = this.priceSum + item.price;
    });
    // this.priceSum = this.priceSum + item.price;
    console.log(this.productUser);
  }

  general_navigation = {
    slidesToShow: this.$device.isMobile ? 1 : 3,
    autoplay: false,
    dots: false,
    asNavFor: this.$refs.forSlick,
    arrows: false,
    focusOnSelect: true,
    goTo: 0,
  };

  setting_slider = {
    slidesToShow: this.$device.isMobile ? 3 : this.tabMenu.length,
    infinite: true,
    autoplay: false,
    dots: false,
    goTo: 0,
    arrows: false,
  };
  setting_nav = {
    slidesToShow: 3,
    autoplay: false,
    dots: false,
    asNavFor: this.$refs.forSlick,
    arrows: false,
    focusOnSelect: true,
  };
  count = 1;
  statusService = false;

  goto(index, i) {
    this.imgSwitcher[`img${index}`] = i;

    // this.setting_slider.goTo = index;
  }
  handlePageChange(page) {
    // page++
    this.page = page;
    // console.log(page);
  }
  mounted() {
    this.viewingPage = 0;
    // console.log(this.stateModal.tab);
    this.$store.commit("product/setLimit", this.$device.isMobile ? 2 : 4);
    this.$store.dispatch("product/init");

    window.$nuxt.$on('sendData', (data)=> {
      console.log(data);
      let newData = Object.assign({}, this.productUser, data)
      shopApi.newBidForСalculator(newData).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.statusService = true;
          this.numberBind = res.number_bin;
        
        }
      });

    })
  }
}
</script>


<style scoped>
.textShadow,
.textShadow:hover {
  text-shadow: 0.3px 0.3px 1.3px black;
}

input[type="radio"]:checked,
input[type="radio"]:not(:checked) {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

input[type="radio"]:checked + label,
input[type="radio"]:not(:checked) + label {
  display: inline-block;
  position: relative;
  padding-left: 28px;
  line-height: 20px;
  cursor: pointer;
}

input[type="radio"]:checked + label:before,
input[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 5px;
  top: 10px;
  width: 22.24px;
  height: 22.24px;
  border: 0.77px solid #222;
  background-color: #ffffff;
  @media (max-width: 980px) {
    left: 5px;
    top: 10px;
    width: 22.24px;
    height: 22.24px;
  }
}

input[type="radio"]:checked + label:before,
input[type="radio"]:not(:checked) + label:before {
  border-radius: 100%;
}

input[type="radio"]:checked + label:after,
input[type="radio"]:not(:checked) + label:after {
  content: "";
  position: absolute;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

input[type="radio"]:checked + label:after,
input[type="radio"]:not(:checked) + label:after {
  left: 9.8px;
  top: 14.4px;
  width: 12.51px;
  height: 12.51px;
  border-radius: 100%;
  background-color: #ffbb30;
  @media (max-width: 980px) {
    left: 9.8px;
  }
}

input[type="radio"]:not(:checked) + label:after {
  opacity: 0;
}

input[type="radio"]:checked + label:after {
  opacity: 1;
}

.mediabox-img.ls-blur-up-is-loading,
.mediabox-img.lazyload:not([src]) {
  visibility: hidden;
}

.mediabox-img {
  font-family: "blur-up: auto", "object-fit: cover";
}
.ls-blur-up-img {
  filter: blur(10px);
  opacity: 1;
  transition: opacity 1000ms, filter 1500ms;
}

.ls-blur-up-img.ls-inview.ls-original-loaded {
  opacity: 0;
  filter: blur(5px);
}

.tran {
  animation: bounce-in 0.3s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(0.7);
    opacity: 0.5;
  }
  75% {
    transform: scale(0.85);
    opacity: 0.75;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.loading {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("@/assets/imgs/product/image-not-found.png");
  height: 10vh;
}
</style>