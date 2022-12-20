<template>
  <!-- Modal toggle -->
  <!-- <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
  Toggle modal
</button> -->

  <!-- Main modal -->
  <div
    :class="[
      'fixed top-0 left-0 right-0 z-50 w-full md:inset-0 md:h-full tran overflow-x-hidden',
      $device.isMobile ? 'h-full overflow-y-scroll' : 'p-4 overflow-y-hidden',
    ]"
  >
    <div class="relative w-full h-full md:h-auto">
      <!-- Modal content -->
      <div
        class="relative text-black bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <!-- Modal header -->
        <div class="flex flex-col p-6 w-full gap-2">
          <div
            v-if="!filterOpen"
            :class="[
              'grid', $device.isMobile ? 'grid-rows-2':'grid-rows-1', 'grid-cols-10',
              'justify-items-start',
              'flex-nowrap',
              'text-black',
              'gap-4',
              'w-full',
              'font-semibold',
              'pl-3',
              'tran']
            "
          >
           
              <div
                :class="[
                  'cursor-pointer',
                  'hover:underline',
                  'underline-offset-8',
                  'hover:text-theme-1',
                   'min-w-24',
                  'textShadow',
                  $device.isMobile ? 'col-start-1 col-end-5':'',
                  stateModal.tab == 'provaslavny' ? 'text-theme-1' : '',
                ]"
              >
                Православные
              </div>
              <div
                :class="[
                  'cursor-pointer',
                  'hover:underline',
                  'underline-offset-8',
                  'hover:text-theme-1',
                  'min-w-24',
                  'textShadow',
                  $device.isMobile ? 'col-start-6 col-end-10':'',
                  stateModal.tab == 'mysulman' ? 'text-theme-1' : '',
                ]"
              >
                Мусульманские
              </div>
              <div
                :class="[
                  'cursor-pointer',
                  'hover:underline',
                  'underline-offset-8',
                  'hover:text-theme-1',
                  'min-w-24',
                  'textShadow',
                  $device.isMobile ? 'col-start-1 col-end-5':'',
                  stateModal.tab == 'kremacia' ? 'text-theme-1' : '',
                ]"
              >
                Кремация
              </div>
        
       
            <div
              :class="[
              $device.isMobile? 'row-start-2':'',
                'col-start-9 col-end-10',
                'inline-flex',
                'gap-2',
                'cursor-pointer',
                'justify-self-end']
              "
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
                  'focus:text-theme-8',
                  'tran',
                  'max-w-9',
                  translit(item.name) ? 'text-theme-8' : '',
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
                      : 'animate-pulse bg-gray-500 rounded-2xl border-2 border-solid border-black',
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
                    "
                    :src="`https://drive.google.com/uc?export=view&id=${
                      item.imgs[imgSwitcher[`img${index}`]]
                    }`"
                    alt=""
                    @load="onImgLoad(index)"
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
                        'min-h-max',
                        loadImg && !loadStatus
                          ? ''
                          : 'animate-pulse bg-gray-500 rounded-2xl border-2 border-solid border-black',
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
                          lazyload
                          tran
                        "
                        :data-src="`https://drive.google.com/uc?export=view&id=${img}`"
                        :src="require(`~/assets/imgs/product/test.jpg`)"
                        alt="product gallery"
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
                      ]"
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
              $device.isMobile ? 'grid-cols-4' : 'grid-cols-2',
              'items-end',
              'justify-items-end',
              'gap-4',
              'w-full',
              'h-20',
            ]"
          >
            <div :class="[$device.isMobile ? 'w-full col-span-3' : '']">
              <Pagination
                :current="page"
                :siblings="stateModal.limit"
                :total="stateModal.total"
                @page-change="handlePageChange"
              />
            </div>

            <div class="">
              <button
                class="
                  bg-theme-5
                  px-6
                  py-2
                  text-white
                  rounded-lg
                  hover:bg-theme-12 hover:transform hover:scale-95
                "
              >
                Далее
              </button>
            </div>
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
const translit = new CyrillicToTranslit();

// lazysizes.cfg.blurupMode = "always";

@Component({
  components: { SlickSlider, SvgFilter },
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
  imgSwitcher = { img0: 0, img1: 1, img2: 2, img3: 2, img4: 2 };

  page = 0;

  @Watch("page")
  setPage() {
    this.$store.commit("product/setPage", this.page);
    this.$store.dispatch("product/init");
  }

  closeModalWindow() {
    window.$nuxt.$emit("switchModal", false);
  }
  setCategory(name, index) {
    let translit_name = translit.transform(name, "_");
    console.log(translit_name);
    this.setting_slider.goTo = index;

    this.$store.commit("product/setCategory", translit_name);
    this.$store.dispatch("product/init");
  }

  // this.$store.commit('product/setLoad', name)

  translit(name) {
    // const translit = new CyrillicToTranslit();
    let translit_name = translit.transform(name, "_");
    console.log(translit_name);
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

  goto(index, i) {
    this.imgSwitcher[`img${index}`] = i;

    // this.setting_slider.goTo = index;
  }
  handlePageChange(page) {
    // page++
    this.page = page;
    console.log(page);
  }
  mounted() {
    // console.log(this.stateModal.tab);
    this.$store.commit("product/setLimit", this.$device.isMobile ? 2 : 4);
    this.$store.dispatch("product/init");
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
</style>