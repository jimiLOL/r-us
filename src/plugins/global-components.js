import Vue from 'vue'
// import CardSVGOnMouse from '@/components/svg/CardsOnMouse.vue';
// import CartSVGOnMouse from '@/components/svg/CartOnMouse.vue';
// import FilterSVGOnClick from '@/components/svg/FilterOnClick.vue';
// import GiftSVGOnMouse from '@/components/svg/GiftOnMouse.vue';
// import LikeSVGOnClick from '@/components/svg/LikeOnClick.vue';
// import ProfileSVGOnMouse from '@/components/svg/ProfileOnMouse.vue';
// import SearchSVGOnMouse from '@/components/svg/SearchOnMouse.vue';
// import ShippingSVGOnMouse from '@/components/svg/ShippingOnMouse.vue';
// import StarSVGOnMouse from '@/components/svg/StarOnMouse.vue';
// import SupportSVGOnMouse from '@/components/svg/SupportOneMouse.vue';
// import SealSVGOnMouse from '@/components/svg/SealOneMouse.vue';
// import AppLink from '../shared/app-link.vue'
import * as featherIcons from "vue-feather-icons";
import Pagination from "~/shared/pagination.vue";
import PopUpCall from "~/global-component/popUpCall.vue";
import LoadingIcon from "~/global-component/loading-icon/Main.vue";

import CKEditor from '@ckeditor/ckeditor5-vue2';


 

// import Tippy from "~/components/tippy/Main.vue";


Vue.component("Pagination", Pagination);
Vue.component("LoadingIcon", LoadingIcon);
Vue.component("CKEditor", CKEditor);
Vue.component("PopUpCall", PopUpCall);




// import "../libs/index";
// Vue.component("CardSVGOnMouse", CardSVGOnMouse);
// Vue.component("CartSVGOnMouse", CartSVGOnMouse);
// Vue.component("FilterSVGOnClick", FilterSVGOnClick);
// Vue.component("GiftSVGOnMouse", GiftSVGOnMouse);
// Vue.component("LikeSVGOnClick", LikeSVGOnClick);
// Vue.component("ProfileSVGOnMouse", ProfileSVGOnMouse);
// Vue.component("SearchSVGOnMouse", SearchSVGOnMouse);
// Vue.component("ShippingSVGOnMouse", ShippingSVGOnMouse);
// Vue.component("StarSVGOnMouse", StarSVGOnMouse);
// Vue.component("SupportSVGOnMouse", SupportSVGOnMouse);
// Vue.component("SealSVGOnMouse", SealSVGOnMouse);



for (const [key, icon] of Object.entries(featherIcons)) {

  icon.props.size.default = "24";
  Vue.component(key, icon);
}
