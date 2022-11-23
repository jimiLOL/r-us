<template>
  <Blog />
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

import Blog from '~/components/blog/Main.vue';

@Component({
    components: {Blog},
     asyncData({ store, route }) {
    store.commit("hover/switchHover", false);
  },
})
export default class Page extends Vue {}
</script>
